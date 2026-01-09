// Contact Modal Functionality
const openBtn = document.getElementById('open-contact');
const modal = document.getElementById('contact-modal');
const closeBtn = document.querySelector('.close-btn');

// Open modal
openBtn.addEventListener('click', () => {
    modal.classList.add('active');
});

// Close modal when clicking X
closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close modal when clicking outside the content box
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// Optional: Close with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
    }
});

