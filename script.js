const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const header = document.querySelector(".header");
const topBtn = document.getElementById("topBtn");
const bookingForm = document.getElementById("bookingForm");
const dateInput = document.getElementById("date");


const GOOGLE_SCRIPT_URL =
 "https://script.google.com/macros/s/AKfycbzgc0iBolFjBUmaEt3JdALIx2gbAFMDn9_iQLdmNbtn80g6DMOEO0tl7YqLOZs6bR4f/exec";


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


bookingForm.addEventListener("submit", function (event) {
 event.preventDefault();


 const submitButton = bookingForm.querySelector("button");


 const formData = {
   name: document.getElementById("name").value.trim(),
   phone: document.getElementById("phone").value.trim(),
   date: document.getElementById("date").value,
   eventType: document.getElementById("eventType").value,
   message: document.getElementById("message").value.trim()
 };

  // Set minimum selectable date to today to prevent past dates
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  dateInput.min = `${yyyy}-${mm}-${dd}`;

  // Validate that the selected date is not in the past
  const todayCheck = new Date();
  const selectedDate = new Date(formData.date);
  // Set time to 0 for comparison of dates only
  todayCheck.setHours(0,0,0,0);
  if (selectedDate < todayCheck) {
    alert("Please select a future date for your event.");
    return;
  }

 if (
   formData.name === "" ||
   formData.phone === "" ||
   formData.date === "" ||
   formData.eventType === ""
 ) {
   alert("Please fill all required fields.");
   return;
 }


 submitButton.disabled = true;
 submitButton.innerText = "Submitting...";


 fetch(GOOGLE_SCRIPT_URL, {
   method: "POST",
   mode: "no-cors",
   headers: {
     "Content-Type": "text/plain"
   },
   body: JSON.stringify(formData)
 })
   .then(() => {
     alert("Thank you! Your booking request has been submitted.");
     bookingForm.reset();
   })
   .catch(() => {
     alert("Something went wrong. Please try again.");
   })
   .finally(() => {
     submitButton.disabled = false;
     submitButton.innerText = "Submit Booking Request";
   });
});