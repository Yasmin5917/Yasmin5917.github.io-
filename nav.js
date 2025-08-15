// Smooth scroll voor interne links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Actieve pagina markeren in navbar
const currentLocation = location.pathname.split("/").pop();
const menuItems = document.querySelectorAll('.nav-links a');

menuItems.forEach(link => {
    if(link.getAttribute('href') === currentLocation) {
        link.classList.add('active');
    }
});
