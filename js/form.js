document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const successMessage = document.querySelector('.form-success');
    const modal = document.getElementById('contact-modal');

    // Replace with your actual email
    const formsubmitEndpoint = 'https://formsubmit.co/ajax/lucarobson0@gmail.com';

    if (form && successMessage) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent redirect

            // Loading state
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;

            // Send via FormSubmit AJAX
            fetch(formsubmitEndpoint, {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                if (data.success === 'true') {
                    // Success!
                    successMessage.textContent = '✅ Message sent successfully! I\'ll get back to you soon.';
                    successMessage.classList.add('visible');
                    form.reset();

                    // Auto-close modal after 4 seconds
                    setTimeout(() => {
                        modal.classList.remove('active');
                        successMessage.classList.remove('visible');
                    }, 4000);
                } else {
                    throw new Error('Submission failed');
                }
            })
            .catch(error => {
                successMessage.textContent = '❌ Oops! Something went wrong. Please try again.';
                successMessage.style.color = '#ef4444';
                successMessage.classList.add('visible');
            })
            .finally(() => {
                // Re-enable button
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            });
        });
    }
});