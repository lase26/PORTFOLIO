// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let errors = [];

    if (!name) {
        errors.push("Name is required.");
    }
    if (!email || !validateEmail(email)) {
        errors.push("Valid email is required.");
    }
    if (!message) {
        errors.push("Message cannot be empty.");
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        alert(`Thank you for your message, ${name}!`);
        this.reset();
    }
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
