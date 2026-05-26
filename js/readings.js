document.addEventListener("DOMContentLoaded", function() {

    const listContainer = document.getElementById("readings-list");

    // Check if container exists and if data file loaded correctly
    if (!listContainer || typeof LIBRARY_DATA === 'undefined') {
        console.error("Container or Data not found.");
        return;
    }

    // Group the books by author
    const booksByAuthor = LIBRARY_DATA.reduce((acc, book) => {
        if (!acc[book.author]) {
            acc[book.author] = [];
        }
        acc[book.author].push(book);
        return acc;
    }, {});

    // Iterate through the grouped data to build HTML
    for (const [author, books] of Object.entries(booksByAuthor)) {
        
        // Start an author section with a prominent heading
        let authorSectionHTML = `
            <div class="author-section">
                <h2 class="author-heading">${author}</h2>
        `;

        // Add the books for this author
        books.forEach(book => {
            const statusClass = book.status === "READ" ? "status-read" : "status-progress";
            const cleanReview = book.review.replace(/^\s+/gm, '');

            authorSectionHTML += `
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

        authorSectionHTML += `</div>`;
        
        listContainer.innerHTML += authorSectionHTML;
    }

});