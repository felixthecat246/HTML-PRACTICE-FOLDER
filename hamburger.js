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
