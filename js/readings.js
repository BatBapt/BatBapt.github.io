document.addEventListener("DOMContentLoaded", function() {

    const listContainer = document.getElementById("readings-list");

    if (!listContainer || typeof LIBRARY_DATA === 'undefined') {
        console.error("Container or Data not found.");
        return;
    }

    // Regroupement des livres par auteur
    const booksByAuthor = LIBRARY_DATA.reduce((acc, book) => {
        if (!acc[book.author]) {
            acc[book.author] = [];
        }
        acc[book.author].push(book);
        return acc;
    }, {});

    let fullHTML = "";

    // Construction du HTML
    for (const [author, books] of Object.entries(booksByAuthor)) {
        
        // En-tête de l'auteur (Cliquable) avec une icône SVG
        fullHTML += `
            <div class="author-section">
                <div class="author-header-toggle">
                    <h2 class="author-heading">${author}</h2>
                    <svg class="toggle-icon" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
                <div class="author-books">
        `;

        // Ajout des livres
        books.forEach(book => {
            const statusClass = book.status === "READ" ? "status-read" : "status-progress";
            const cleanReview = book.review.replace(/^\s+/gm, '');

            fullHTML += `
                <article class="book-card">
                    <div class="book-header">
                        <div>
                            <h3 class="book-title">${book.title}</h3>
                        </div>
                        <div class="book-meta">
                            <div class="book-score">${book.score}</div>
                            <div class="book-status ${statusClass}">${book.status}</div>
                        </div>
                    </div>
                    <div class="book-review">
                        ${cleanReview}
                    </div>
                </article>
            `;
        });

        // Fermeture de la section auteur
        fullHTML += `</div></div>`;
    }

    // Injection dans la page
    listContainer.innerHTML = fullHTML;

    // Ajout de l'interactivité (le système de volet)
    const toggles = document.querySelectorAll('.author-header-toggle');
    
    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // On cible la balise parente <div class="author-section">
            const section = this.parentElement;
            
            // La méthode "toggle" ajoute la classe "is-expanded" si elle n'y est pas, ou l'enlève si elle y est
            section.classList.toggle('is-expanded');
        });
    });

});