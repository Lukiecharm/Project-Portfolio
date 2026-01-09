// Back to Top smooth scroll
document.getElementById('back-to-top')?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});