document.addEventListener("DOMContentLoaded", function() {
    
    function loadComponent(elementId, filePath) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load component: " + filePath);
                }
                return response.text();
            })
            .then(htmlData => {
                const container = document.getElementById(elementId);
                if (container) {
                    container.innerHTML = htmlData;
                }
            })
            .catch(error => console.error("Error:", error));
    }

    // Updated paths to the components folder
    loadComponent("header-placeholder", "components/header.html");
    loadComponent("footer-placeholder", "components/footer.html");

});