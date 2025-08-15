document.addEventListener('DOMContentLoaded', () => {
    
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('header nav ul li a');

    // Menu transparantie aanpassen bij scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(0, 0, 0, 0.85)';
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.3)';
        } else {
            header.style.background = 'rgba(0, 0, 0, 0.5)';
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }

        // Sectie animatie trigger
        document.querySelectorAll('.fade-in').forEach(section => {
            const top = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (top < windowHeight - 100) {
                section.classList.add('visible');
            }
        });
    });

    // Active link highlight
    const current = window.location.pathname.split("/").pop();
    navLinks.forEach(link => {
        if(link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });

    // Smooth scroll voor interne links
    navLinks.forEach(link => {
        if(link.hash) {
            link.addEventListener('click', e => {
                e.preventDefault();
                document.querySelector(link.hash).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        }
    });
});
