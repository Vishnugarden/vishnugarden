const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const header = document.querySelector(".header");
const topBtn = document.getElementById("topBtn");
const bookingForm = document.getElementById("bookingForm");


menuBtn.addEventListener("click", () => {
 navLinks.classList.toggle("active");
});


window.addEventListener("scroll", () => {
 if (window.scrollY > 80) {
   header.classList.add("scrolled");
   topBtn.classList.add("show");
 } else {
   header.classList.remove("scrolled");
   topBtn.classList.remove("show");
 }
});


topBtn.addEventListener("click", () => {
 window.scrollTo({
   top: 0,
   behavior: "smooth"
 });
});


document.querySelectorAll(".nav-links a").forEach((link) => {
 link.addEventListener("click", () => {
   navLinks.classList.remove("active");
 });
});


bookingForm.addEventListener("submit", function(event) {
 event.preventDefault();


 const name = document.getElementById("name").value.trim();
 const phone = document.getElementById("phone").value.trim();
 const date = document.getElementById("date").value;
 const eventType = document.getElementById("eventType").value;


 if (name === "" || phone === "" || date === "" || eventType === "") {
   alert("Please fill all required fields.");
   return;
 }


 alert(
   "Thank you " + name + "! Your booking request has been submitted. Our team will contact you soon."
 );


 bookingForm.reset();
});

