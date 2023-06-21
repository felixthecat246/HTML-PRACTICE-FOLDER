// Get the necessary elements from the HTML
const packagesSection = document.getElementById('packages');
const customerInfoSection = document.getElementById('customer-info');
const billingInfoSection = document.getElementById('billing-info');
const bookingForm = document.getElementById('booking-form');
const billingForm = document.getElementById('billing-form');

// Hide the customer information section and billing information section initially
customerInfoSection.classList.add('hidden');
billingInfoSection.classList.add('hidden');

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
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const dateInput = document.getElementById('date');
  const messageInput = document.getElementById('message');

  // Store the form data
  const formData = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    date: dateInput.value,
    message: messageInput.value
  };

  // You can now proceed with processing the form data (e.g., send it to a server for further processing)
}

// Event listener for the contact information form submission
bookingForm.addEventListener('submit', handleContactInfoSubmit);

// Event handler for the contact information form submission
function handleContactInfoSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Hide the contact information section
  customerInfoSection.classList.add('hidden');

  // Show the billing information section
  billingInfoSection.classList.remove('hidden');
}

// Event listener for the billing form submission
billingForm.addEventListener('submit', handleBillingFormSubmit);

// Event handler for the billing form submission
function handleBillingFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Retrieve the billing form inputs
  const cardNumberInput = document.getElementById('card-number');
  const cardholderNameInput = document.getElementById('cardholder-name');
  const expirationDateInput = document.getElementById('expiration-date');
  const cvvInput = document.getElementById('cvv');

  // Store the billing form data
  const billingFormData = {
    cardNumber: cardNumberInput.value,
    cardholderName: cardholderNameInput.value,
    expirationDate: expirationDateInput.value,
    cvv: cvvInput.value
  };

  // You can now proceed with processing the billing form data (e.g., send it to a server for payment processing)

  // Display a success message or redirect to a confirmation page
  displaySuccessMessage();
}

// Function to display the success message
function displaySuccessMessage() {
  const successMessage = document.createElement('p');
  successMessage.textContent = 'Payment successful! Please refer to your email for booking information';
  successMessage.classList.add('success-message');
  const billingForm = document.getElementById('billing-form');
  billingForm.parentNode.insertBefore(successMessage, billingForm.nextSibling);
}

