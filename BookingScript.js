document.addEventListener("DOMContentLoaded", function() {
    var bookingForm = document.getElementById("booking-form");
  
    bookingForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Retrieve form field values
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var paymentMethod = document.getElementById("payment-method").value;
      var creditCardNumber = document.getElementById("credit-card-number").value;
      var expiryDate = document.getElementById("expiry-date").value;
      var cvv = document.getElementById("cvv").value;
  
      // Process the booking information
      // You can send the data to a server, store it in a database, or perform any other necessary actions
  
      // Display a confirmation message to the user
      alert("Booking successful! Thank you for your reservation.");
  
      // Reset the form
      bookingForm.reset();
    });
  });
// Hamburger menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const lines = document.querySelectorAll('.line');
const sideMenu = document.querySelector('.side-menu');

hamburgerMenu.addEventListener('click', function() {
  lines.forEach(line => line.classList.toggle('active'));
  sideMenu.classList.toggle('open');
  closePopup(); // Close the newsletter popup when hamburger menu is clicked
});

// Smooth scrolling behavior for older browsers or custom configurations
document.addEventListener('DOMContentLoaded', function() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');

  for (const scrollLink of scrollLinks) {
    scrollLink.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
});

// Smooth scrolling behavior for older browsers or custom configurations
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
    for (const scrollLink of scrollLinks) {
      scrollLink.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
          behavior: 'smooth'
        });
      });
    }
  });