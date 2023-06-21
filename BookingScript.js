// Button click event handler
function handleBookNowClick() {
  // Hide the packages section
  document.getElementById('packages').style.display = 'none';

  // Show the customer info section
  const customerInfoSection = document.getElementById('customer-info');
  customerInfoSection.classList.remove('hidden');

  // Deploy the calendar
  const calendarContainer = document.getElementById('calendar-container');
  calendarContainer.innerHTML = `
    <h2>Select a date</h2>
    <div id="calendar"></div>
  `;

  // Initialize and configure the calendar (using FullCalendar library as an example)
  const calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
    // Add your calendar configuration options here
    // For example, specify the available dates, time slots, etc.
  });
  calendar.render();
}

// Form submission event handler
function handleFormSubmit(event) {
  event.preventDefault();

  // Get the entered customer information
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Perform any desired actions with the customer information
  console.log('Name:', name);
  console.log('Email:', email);

  // Optional: Redirect the user to a confirmation page or perform additional processing

  // Clear the form fields
  document.getElementById('booking-form').reset();
}

// Attach event listeners
document.addEventListener('DOMContentLoaded', function() {
  const bookNowButtons = document.getElementsByClassName('book-now');
  for (let i = 0; i < bookNowButtons.length; i++) {
    bookNowButtons[i].addEventListener('click', handleBookNowClick);
  }

  const bookingForm = document.getElementById('booking-form');
  bookingForm.addEventListener('submit', handleFormSubmit);

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
// Get the necessary elements from the HTML
const packagesSection = document.getElementById('packages');
const customerInfoSection = document.getElementById('customer-info');
const bookingForm = document.getElementById('booking-form');

// Hide the customer information section initially
customerInfoSection.classList.add('hidden');

// Add event listeners to the "Book Now" buttons in the packages section
const bookNowButtons = document.querySelectorAll('.book-now');
bookNowButtons.forEach((button) => {
  button.addEventListener('click', handleBookNow);
});

// Event handler for the "Book Now" button
function handleBookNow() {
  // Hide the packages section
  packagesSection.classList.add('hidden');

  // Show the customer information section
  customerInfoSection.classList.remove('hidden');
}

// Event listener for the form submission
bookingForm.addEventListener('submit', handleFormSubmit);

// Event handler for the form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Retrieve the form inputs
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  // Store the form data
  const formData = {
    name: nameInput.value,
    email: emailInput.value
  };

  // You can now proceed with processing the form data (e.g., send it to a server for further processing)

  // Display a success message or redirect to a confirmation page
  alert('Booking successful!'); // Replace this with your desired action
}
