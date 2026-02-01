document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");

    if (!name || !email || !message) {
        status.style.color = "red";
        status.textContent = "All fields are required!";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        status.style.color = "red";
        status.textContent = "Invalid email format!";
        return;
    }

    status.style.color = "lightgreen";
    status.textContent = "Message sent successfully (demo).";
    this.reset();
});
