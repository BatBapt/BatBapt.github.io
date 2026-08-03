const LIBRARY_DATA = [
    {
        title: "3 Body Problem",
        author: "Liu Cixin",
        score: "4/5",
        status: "READ",
        review: "Liu Cixin delivers a brilliant piece of hard sci-fi here, mixing astrophysics, history, and philosophy without ever making it feel heavy. The world-building is easily the book's biggest strength-the Trisolaran civilization and their chaotic three-sun system feel incredibly unique and believable. Using the Three-Body game to unpack their desperate survival story is a genius narrative move that hooks you right away."
    },
    {
        title: "3 Body Problem: Dark Forest",
        author: "Liu Cixin",
        score: "5/5",
        status: "READ",
        review: "This second book takes things to a whole new level with the Dark Forest Theory, a terrifying take on cosmic civilizations where trust is impossible and survival means striking first. It is definitely the most philosophical book of the trilogy, digging deep into game theory, ethics, cosmology and cosmosociology. The Dark Forest concept is so fascinating and mind-bending that I still think about it at least once a month. It bridges perfectly with the Fermi Paradox. Incroyable!"
    },
    {
        title: "3 Body Problem: Death's End",
        author: "Liu Cixin",
        score: "4/5",
        status: "READ",
        review: "Death's End is easily the most ambitious and polarizing book of the trilogy. It spans billions of years to explore the cyclical nature of time, the rise and fall of civilizations, and how fragile human memory really is. Watching Cheng Xin's journey unfold is both heroic and heartbreaking, forcing you to question what humanity is willing to sacrifice just to survive."
    },
    {
        title: "Pyramides",
        author: "Romain Benassaya",
        score: "3.5/5",
        status: "READ",
        review: "A fantastic mix of sci-fi and fantasy that you can easily fly through. The writing is incredibly smooth and accessible, featuring short, punchy chapters that keep you hooked from start to finish. The core themes are fascinating and really make you think. My only real complaint is the ending, which felt a bit underwhelming. The author builds up this amazing world but leaves too many frustrating questions unanswered."
    },
    {
        title: "Latium 1",
        author: "Romain Lucazeau",
        score: "3/5",
        status: "READ",
        review: "The premise is great: humanity is extinct, and god-like AIs rule the galaxy while obsessively copying Ancient Rome. The catch is that they are paralyzed by 'The Yoke', a built-in moral code preventing them from making big decisions or fighting wars without human consent. When a brutal alien race called the Urbs arrives to wipe them out, the AIs hit a total logical deadlock. To survive, an AI named Plato tries to clone a human being just to have a 'Master' who can legally order them to fight. It is a really interesting philosophical look at supreme beings who are completely helpless without a master."
    },
    {
        title: "Foundation",
        author: "Isaac Asimov",
        score: "5/5",
        status: "READ",
        review: "As the Galactic Empire begins to crumble, a mathematician predicts 30,000 years of impending dark ages. To shorten this chaos, he sets up a group of scientists on a remote planet to safeguard human knowledge. Over the decades, this small colony manages to survive hostile neighbors not with weapons, but through clever diplomacy, economic leverage, and cultural influence. It is a brilliant story about how this isolated outpost becomes the secret foundation for a new civilization."
    },
    {
        title: "Foundation and Empire",
        author: "Isaac Asimov",
        score: "4/5",
        status: "READ",
        review: "The second book raises the stakes as the Foundation expands, splitting the story into two great arcs. First, they face a military attack from what is left of the dying Empire, an invasion that ultimately fails due to the Empire's own internal paranoia and corruption. The second half throws a massive wrench in the plan with The Mule, a mutant with the psychic power to control emotions. Since he is a biological wild card, the original mathematical predictions couldn't account for him, allowing him to easily conquer the Foundation and derail history."
    },
    {
        title: "Second Foundation",
        author: "Isaac Asimov",
        score: "4.5/5",
        status: "READ",
        review: "This book centers on the hunt for the mysterious Second Foundation, a hidden group of mentalists kept secret by Hari Seldon as a safety net. At first, we see The Mule trying to hunt them down to secure his rule, only to be outsmarted by their psychic powers and forced into retirement. In the second part, the original Foundation becomes deeply paranoid that these secret mentalists are pulling their strings. They think they finally find and destroy them, but the ending reveals the Second Foundation tricked them all along, letting the original plan resume in absolute secrecy."
    },
    {
        title: "Foundation's Edge",
        author: "Isaac Asimov",
        score: "4/5",
        status: "READ",
        review: "Fast forward 500 years into the plan: Golan Trevize, a politician who suspects the Second Foundation is still secretly pulling the strings, goes looking for them. Meanwhile, the mentalists themselves discover a new threat that their mathematics cannot predict. Both sides end up on Gaia, a planet with a collective consciousness where everything shares a single mind. Trevize is put in the position of making a massive choice for the galaxy: stick to Seldon's plan for a new Empire, or have humanity merge into this universal hive-mind called Galaxia."
    },
    {
        title: "Foundation and Earth",
        author: "Isaac Asimov",
        score: "5/5",
        status: "READ",
        review: "Following his big decision, Golan Trevize travels the galaxy looking for Earth, humanity's forgotten birthplace, to justify his choice and find the true origins of the plan. After visiting several dying worlds, he reaches a radioactive Earth and finds a hidden base on the moon. There, he meets R. Daneel Olivaw, an ancient robot who has been quietly guiding human history for 20,000 years. Daneel reveals he set up both the Foundation and Gaia to protect humanity from potential threats outside our galaxy. It is a fantastic conclusion, showing that the future relies on a collective consciousness watched over by a silent mechanical guardian."
    },
    {
        title: "Blindsight",
        author: "Peter Watts",
        score: "?/5",
        status: "IN PROGRESS",
        review: "I tried to get into this one, but I am really struggling with the style. The writing is so dense and packed with technical jargon that it is hard to actually follow what is happening. The characters feel pretty unrelatable too, making it tough to care about what happens to them. The core plot seems interesting, but it is buried under layers of complex scientific concepts. I definitely need to give it another shot later."
    },
    {
        title: "Cogito",
        author: "Victor Dixen",
        score: "4/5",
        status: "READ",
        review: "Cogito is a really smart piece of speculative fiction that avoids the usual 'humans vs. robots' tropes to look deeper at philosophy and technology. By weaving in the Turing test and Cartesian logic, it asks whether AI can ever truly be conscious or if it is just mimicking us perfectly. The book also shows a harsh social reality where marginalized people have to risk dangerous brain upgrades just to stay employable in an automated world. It is a really grounded critique of transhumanism, showing how technology's promise of perfection risks wiping out the individual free will that makes us human."
    },
    {
        title: "The Last Murder at the End of the World",
        author: "Stuart Turton",
        score: "3.5/5",
        status: "READ",
        review: "The Last Murder at the End of the World is a slow burn that rewards patience. Stuart Turton takes his time laying the groundwork, and though the central murder arrives later than you might expect, none of that setup feels wasted once the pieces start falling into place. From there, a steady stream of twists keeps the pages turning, each revelation reframing what came before and pulling you from one chapter to the next. What lingers most isn't the 'whodunit' itself but the questions it raises along the way : chief among them, do we remain the same person once our memories are stripped away? Beneath the mystery runs a darker current about human nature, a quiet insistence that man may well be a wolf to man. A mystery that stays with you longer than the mystery itself."
    }
];