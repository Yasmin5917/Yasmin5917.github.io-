document.addEventListener("DOMContentLoaded", () => {
  // ---------------- STICKY NAVBAR ----------------
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 0) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    });
  }

  // ---------------- HAMBURGER TOGGLE ----------------
  const menuToggle = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuToggle.classList.toggle('active'); // voor animatie van hamburger
    });
  }
});