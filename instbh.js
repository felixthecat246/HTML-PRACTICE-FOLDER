// Hamburger menu
const hamburgerMenu = document.querySelector('.hamburger-menu');
const lines = document.querySelectorAll('.line');
const sideMenu = document.querySelector('.side-menu');

hamburgerMenu.addEventListener('click', function() {
  lines.forEach(line => line.classList.toggle('active'));
  sideMenu.classList.toggle('active');
  closePopup(); // Close the newsletter popup when hamburger menu is clicked
});

// Slideshow
var slideIndex = 0;
var timer;

// Start the slideshow
function startSlideshow() {
  timer = setInterval(function() {
    changeSlide(1);
  }, 5000);
}

// Show initial slide
showSlide(slideIndex);

// Change slide by given amount (positive or negative)
function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Display the slide at the given index
function showSlide(n) {
  var slides = document.getElementsByClassName("slide");

  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex].style.display = "block";

  // Clear the timer and start it again
  clearInterval(timer);
  startSlideshow();
}

// Start the slideshow initially
startSlideshow();

// Newsletter popup
document.addEventListener("DOMContentLoaded", function() {
  var newsletterPopup = document.getElementById("newsletter-popup");
  var closePopupButton = document.getElementById("close-popup");

  function showPopup() {
    newsletterPopup.style.display = "block";
    document.body.classList.add('newsletter-popup-open');
  }

  function closePopup() {
    newsletterPopup.style.display = "none";
    document.body.classList.remove('newsletter-popup-open');
  }

  // Show the popup after a delay (e.g., 5 seconds)
  setTimeout(showPopup, 5000);

  closePopupButton.addEventListener("click", closePopup);
});
document.addEventListener('click', function(event) {
  const target = event.target;
  if (!sideMenu.contains(target) && !hamburgerMenu.contains(target)) {
    sideMenu.classList.remove('active');
    lines.forEach(line => line.classList.remove('active'));
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
