function renderLibrary() {
    const container = document.getElementById('book-grid');
    if (!container) return;

    // On utilise la variable LIBRARY_DATA définie dans l'autre fichier
    container.innerHTML = LIBRARY_DATA.map(book => `
        <article class="data-card">
            <div class="data-header">
                <h3 class="mono" style="font-size: 1rem; margin: 0; color: var(--text-primary);">${book.title}</h3>
                <span style="font-size: 0.75rem; border: 1px solid var(--accent); padding: 2px 5px; color: var(--accent);">
                    ${book.score}
                </span>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-dim); margin-bottom: 1rem;">
                AUTHOR: ${book.author}<br>
                STATUS: ${book.status}
            </div>
            
            <div class="review-text" style="font-size: 0.85rem; color: var(--text-primary); flex-grow: 1;">
                <strong style="color: var(--keyword);">[OUTPUT_LOG]:</strong>
                ${book.review}
            </div>
        </article>
    `).join('');
}

document.addEventListener('DOMContentLoaded', renderLibrary);