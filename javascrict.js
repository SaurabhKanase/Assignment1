document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        document.getElementById('messageDisplay').innerText = `Thank you, ${name}! Your message has been sent.`;
        this.reset(); // Reset the form
    } else {
        document.getElementById('messageDisplay').innerText = "Please fill in all fields.";
    }
});
