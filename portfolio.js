function openFullscreen(image) {
  // Create a new fullscreen element
  var fullscreen = document.createElement('div');
  fullscreen.classList.add('fullscreen');

  // Create an image element inside the fullscreen element
  var img = document.createElement('img');
  img.src = image.src;
  img.alt = image.alt;
  fullscreen.appendChild(img);

  // Add the fullscreen element to the document body
  document.body.appendChild(fullscreen);

  // Close fullscreen when clicked outside the image
  fullscreen.addEventListener('click', function() {
    document.body.removeChild(fullscreen);
  });
}

var galleryItems = document.querySelectorAll('.gallery a');

galleryItems.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    const imageUrl = item.getAttribute('href');
    window.open(imageUrl, '_blank');
  });
});

// Smooth scrolling behavior for older browsers or custom configurations
document.addEventListener('DOMContentLoaded', function() {
  var scrollLinks = document.querySelectorAll('a[href^="#"]');

  for (var i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
        behavior: 'smooth'
      });
    });
  }
});
