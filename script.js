// burger menu function
document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const navbar = document.querySelector('.navbar');
  
    burgerMenu.addEventListener('click', function () {
      navbar.classList.toggle('show');
    });
  
    // Close the menu when clicking outside the navbar
    document.addEventListener('click', function (event) {
      if (!navbar.contains(event.target) && !burgerMenu.contains(event.target)) {
        navbar.classList.remove('show');
      }
    });
  });

// Slideshow function
// JavaScript
document.addEventListener('DOMContentLoaded', function () {
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      
      slideIndex++;
      
      if (slideIndex > slides.length) { 
        slideIndex = 1;
      }    
  
      slides[slideIndex - 1].style.display = "block";  
      setTimeout(showSlides, 3500); // Change slide every 3.5 seconds (adjust as needed)
    }
  });
  