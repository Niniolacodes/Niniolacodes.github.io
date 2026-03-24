function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}

// Simple form alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});
