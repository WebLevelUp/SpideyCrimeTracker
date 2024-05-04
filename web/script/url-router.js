// main.js

document.addEventListener("DOMContentLoaded", function() {
    // Function to load content dynamically without page reload
    function loadPage(page) {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;
            });
    }

    // Event listener for login button
    document.getElementById("loginButton").addEventListener("click", function() {
        // Load sidebar.html when login button is clicked
        loadPage('./html/sidebar.html');
    });
});
