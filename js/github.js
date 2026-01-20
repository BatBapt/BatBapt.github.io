const GITHUB_USER = 'BatBapt'; 

async function fetchRepos() {
    const container = document.getElementById('github-repos');
    if (!container) return;

    try {
        const response = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=9`);
        const repos = await response.json();

        if (!Array.isArray(repos)) throw new Error("Réponse invalide");

        container.innerHTML = repos.map(repo => `
            <article class="data-card">
                <div>
                    <div class="data-header">
                        <h3 class="mono" style="font-size: 1rem; margin: 0; color: var(--accent); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                            ${repo.name}
                        </h3>
                        <span style="font-size: 0.75rem; color: var(--text-dim); flex-shrink: 0;">★ ${repo.stargazers_count}</span>
                    </div>
                    <div style="font-size: 0.8rem; color: var(--keyword); margin-bottom: 0.5rem;">
                        LANG: ${repo.language || 'N/A'}
                    </div>
                    <p style="font-size: 0.85rem; color: var(--text-primary); line-height: 1.4;">
                        ${repo.description ? repo.description.slice(0, 100) + (repo.description.length > 100 ? '...' : '') : "Pas de description disponible."}
                    </p>
                </div>
                <a href="${repo.html_url}" target="_blank" style="margin-top: 1rem; font-size: 0.8rem; text-align: right; color: var(--accent); display: block;">
                    [ ACCESS_CODE ]
                </a>
            </article>
        `).join('');

    } catch (err) {
        console.error(err);
        container.innerHTML = `<p style="color: #f38ba8;">Erreur: Impossible de se connecter au Node GitHub de ${GITHUB_USER}.</p>`;
    }
}

document.addEventListener('DOMContentLoaded', fetchRepos);