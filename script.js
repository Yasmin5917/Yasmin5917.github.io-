// Zorg dat het script pas laadt als de DOM volledig is geladen
document.addEventListener('DOMContentLoaded', () => {
    
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('header nav ul li a');

    // Menu transparantie aanpassen bij scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.85)';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });

    // Active link highlight op basis van URL
    const current = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
        if(link.getAttribute('href') === current) {
            link.style.color = '#0077cc';
            link.style.fontWeight = '700';
        }
    });

});
