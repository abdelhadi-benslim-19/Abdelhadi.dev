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
  