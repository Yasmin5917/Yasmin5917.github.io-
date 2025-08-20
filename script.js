m// Selecteer de menu toggle en de navigatie
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links ul');

// Voeg een klik-event toe aan de toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle de 'active'-klasse
});