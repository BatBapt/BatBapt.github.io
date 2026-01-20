// Charge header et footer dynamiquement
async function loadComponents() {
    const components = document.querySelectorAll('[data-component]');
    for (const el of components) {
        const name = el.getAttribute('data-component');
        try {
            const response = await fetch(`components/${name}.html`);
            if (response.ok) {
                el.innerHTML = await response.text();
                // Active le lien courant dans le menu
                highlightCurrentPage();
            }
        } catch (err) {
            console.error(`Erreur chargement ${name}:`, err);
        }
    }
}

function highlightCurrentPage() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.style.color = 'var(--accent)';
            link.style.fontWeight = 'bold';
        }
    });
}

document.addEventListener('DOMContentLoaded', loadComponents);