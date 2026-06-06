const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.getElementById("contactBtn").addEventListener("click", () => {
    alert(
        "Thank you for your interest in Vishnu Garden Banquet Hall. Our team will contact you shortly."
    );
});
