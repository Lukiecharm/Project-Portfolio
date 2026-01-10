window.addEventListener("load", () => {
    const intro = document.getElementById("intro-overlay");

    if (!intro) return;

    if (sessionStorage.getItem("introPlayed")) {
        intro.remove();
        return;
    }

    sessionStorage.setItem("introPlayed", "true");

    setTimeout(() => {
        intro.classList.add("hide");
    }, 1800);
});
