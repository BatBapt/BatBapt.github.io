const N_SAMPLES = 3;
const COLUMNS = [
    { label: "Original", dir: "original", note: "" },
    { label: "Layer 6", dir: "layer6", note: "mean WER 0.372" },
    { label: "Layer 8", dir: "layer8", note: "mean WER 0.349" },
    { label: "Layer 9", dir: "layer9", note: "mean WER 0.328", best: true },
];

// original = reference transcript, layers = ASR output on the resynthesized audio
const TRANSCRIPTS = {
    original: [
        "þeir hjartað ráða för og heldur sáttur á braut nýársnótt gekk að mestu leyti vel fyrir sig mikið var um skemmtanahald en fáir gistu í fangaklefa tals", 
        "tugir björgunarsveitarmanna tóku þátt í aðgerðum í bænum í allan dag vopnaðir menn réðust inn í myndir sjónvarpsstöðvar í ekvador í gær ofbeldisalda gengi", 
        "tengsl söngvahjarninnar og júróvísum vegna gagnrýna á þátttöku ísraels ákveðið verður í samráði við sigurvegarakeppninnar hér heima hvort hann fer til svíþjóðar"
    ],
    layer6: [
        "ég ætti að ráða för og heldur sáttur og braut",
        "guðjón björgvinur sætur manna tóku þátt í aðgerðum við bænum í allan dag", 
        "tengslusöngur hérna er jórófi silfragleg gagnrýna á þátttöku ísafs ákveðið verður í samræði við sigurveðurferðina hér heima hvort hann ber til síþóðar"
    ],
    layer8: [
        "þeir hjartaðir hafa það för og heldur sottur og braut nýársnótt gekk að mestu leyti vel fyrir sig og mikið var um spjarnan og haldan fáöryggist viðfangabréfa", 
        "fugir björgunarsveitarmanna tóku þekkti aðgerðum í bænum í allan dag", 
        "tengsl söngva hérna er á jörðvísu vegna gagnrýna þátttöku ísraels ákveðið var við samræða við sigurvegurðargerðina hér heina hvort hann fer til síðþar"
    ],
    layer9: [
        "þeir hjartaði ráða för og heldur sótt þurr og braut miðósnot gekk að mestu leyti vel fyrir sig um leiki var um skemmtanahald en fáir gistu uppfanguglega", 
        "tugir björgunarsveitarmanna tóku þátt í aðgerðum í bæninu í allan dag", 
        "tengsl söngarkeppnanna um júravísun vegna gagnrýna þvottöku ísæfs ákveði verður í samráði við sigurvegarakeppnina hér heima hvort hann fer til síðþar"
    ],
};

// per-clip WER from your evaluation, same order as the transcripts
const WER = {
    layer6: [0.815, 0.750, 0.455],
    layer8: [0.481, 0.667, 0.545],
    layer9: [0.370, 0.583, 0.409],
};

const escapeHtml = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const norm = w => w.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "");
const words = s => s.split(/\s+/).filter(Boolean);

// Mark hypothesis words that are not part of the longest common subsequence with the reference
function markErrors(ref, hyp) {
    const r = words(ref).map(norm);
    const h = words(hyp);
    const hn = h.map(norm);
    const dp = Array.from({ length: r.length + 1 }, () => new Array(hn.length + 1).fill(0));
    for (let i = r.length - 1; i >= 0; i--)
        for (let j = hn.length - 1; j >= 0; j--)
            dp[i][j] = r[i] === hn[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);

    const ok = new Array(h.length).fill(false);
    let i = 0, j = 0;
    while (i < r.length && j < hn.length) {
        if (r[i] === hn[j]) { ok[j] = true; i++; j++; }
        else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
        else j++;
    }
    return h.map((w, k) => ok[k] ? escapeHtml(w) : `<mark>${escapeHtml(w)}</mark>`).join(" ");
}

const head = document.querySelector("#samples thead tr");
const body = document.querySelector("#samples tbody");
 
for (const c of COLUMNS) {
    head.insertAdjacentHTML("beforeend",
        `<th scope="col"${c.best ? ' class="best"' : ""}>${c.label}<small>${c.note}</small></th>`);
}
 
for (let i = 1; i <= N_SAMPLES; i++) {
    const ref = TRANSCRIPTS.original[i - 1];
    let cells = "";
    for (const c of COLUMNS) {
        const txt = TRANSCRIPTS[c.dir][i - 1];
        const html = c.dir === "original" ? escapeHtml(txt) : markErrors(ref, txt);
        const wer = WER[c.dir]?.[i - 1];
        cells += `<td data-label="${c.label}"${c.best ? ' class="best"' : ""}>`
            + `<audio controls preload="none" src="audio/${c.dir}/${i}.wav"></audio>`
            + `<p class="transcript">${html}</p>`
            + (typeof wer === "number" ? `<p class="clip-wer">WER ${wer.toFixed(3)}</p>` : "")
            + `</td>`;
    }
    body.insertAdjacentHTML("beforeend", `<tr><th scope="row">Sample ${i}</th>${cells}</tr>`);
}