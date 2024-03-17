const textElements = document.querySelectorAll('#typing-effect > *');
let charIndex = -1;
let elementIndex = 0;

function type() {
  if (elementIndex < textElements.length) {
    if (charIndex < textElements[elementIndex].textContent.length - 1) {
      charIndex++;
      textElements[elementIndex].textContent = textElements[elementIndex].textContent.substring(0, charIndex + 1);
      textElements[elementIndex].classList.add('typing');
    } else {
      textElements[elementIndex].classList.remove('typing');
      elementIndex++;
      charIndex = -1;
    }
  }
  setTimeout(type, 120); // Velocidad de escritura
}

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


(function ($) {
  "use strict";
  
  // Initiate the wowjs
  new WOW().init();

  // Testimonials carousel
  $(document).ready(function() {
    type();
    $(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      center: true,
      margin: 25,
      dots: true,
      loop: true,
      nav : false,
      responsive: {
          0:{
              items:1
          },
          768:{
              items:2
          },
          992:{
              items:1
          }
      }
  });
  })
  
  
})(jQuery);
