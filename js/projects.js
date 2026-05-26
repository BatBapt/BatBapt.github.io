document.addEventListener("DOMContentLoaded", function() {
    
    // Replace these with the exact names of the repositories you want to showcase
    const curatedRepos = [
        "BatBapt.github.io",
        "sarscope_detection",
        "aerial_detection",
        "brain_seg",
        "rooftop_detection",
        "fruit_classification",
        "satellite_image",
    ];
    
    const githubUsername = "BatBapt";
    const gridContainer = document.getElementById("projects-grid");

    if (!gridContainer) return;

    fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100`)
        .then(response => {
            if (!response.ok) {
                throw new Error("GitHub API rate limit exceeded or network error.");
            }
            return response.json();
        })
        .then(repos => {
            gridContainer.innerHTML = "";

            // Filter only the curated repos and sort them to match your array order
            const filteredRepos = repos.filter(repo => curatedRepos.includes(repo.name));
            
            // to show ALL non-fork repos instead, uncomment the line below and delete the line above:
            // const filteredRepos = repos.filter(repo => !repo.fork);

            if (filteredRepos.length === 0) {
                gridContainer.innerHTML = "<p>No specific projects found. Check repository names.</p>";
                return;
            }

            filteredRepos.forEach(repo => {
                const desc = repo.description || "No description provided.";
                const lang = repo.language || "Mixed";
                const html = `
                    <div class="project-card">
                        <h3 class="project-title">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </h3>
                        <p class="project-desc">${desc}</p>
                        <div class="project-footer">
                            <div class="project-language">
                                <span class="lang-dot"></span>
                                <span>${lang}</span>
                            </div>
                            <div class="project-stars">
                                Stars: ${repo.stargazers_count}
                            </div>
                        </div>
                    </div>
                `;
                gridContainer.innerHTML += html;
            });
        })
        .catch(error => {
            console.error("Error fetching GitHub projects:", error);
            gridContainer.innerHTML = `<p>Error loading projects. <a href="https://github.com/${githubUsername}" target="_blank" style="color: var(--accent-color);">Visit my GitHub profile directly</a>.</p>`;
        });
});