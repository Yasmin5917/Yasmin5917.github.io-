// Selecteer de hamburger en het navigatiemenu
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Voeg een klik-event toe aan de hamburger
menuToggle.addEventListener('click', () => {
    // Toggle de 'active' class voor het menu (om te laten zien/verbergen)
    navLinks.classList.toggle('active');

    // Toggle de 'active' class voor de hamburger zelf (animatie)
    menuToggle.classList.toggle('active');
});