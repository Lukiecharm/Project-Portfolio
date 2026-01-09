const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
    toggleButton.textContent = savedTheme === "dark" ? "☀️" : "🌙";
}

toggleButton.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme");

    if (currentTheme === "dark") {
        body.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "🌙";
    } else {
        body.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "☀️";
    }
});
