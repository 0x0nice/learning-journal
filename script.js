document.addEventListener("DOMContentLoaded", function () {
    // Create Dark Mode Toggle Button
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.id = "theme-toggle";

    // Append the button inside the footer (bottom of the page)
    const footer = document.querySelector("footer");
    if (footer) {
        footer.appendChild(toggleButton);
    } else {
        document.body.appendChild(toggleButton);
    }

    // Function to enable dark mode
    function enableDarkMode() {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
    }

    // Function to disable dark mode
    function disableDarkMode() {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
    }

    // Check saved theme preference
    if (localStorage.getItem("theme") === "dark") {
        enableDarkMode();  // Ensure dark mode applies on all pages
    }

    // Toggle dark mode when the button is clicked
    toggleButton.addEventListener("click", function () {
        if (document.body.classList.contains("dark-mode")) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
});