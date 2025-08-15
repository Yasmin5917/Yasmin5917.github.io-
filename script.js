// Sticky header shadow
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const options = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.style.animationPlayState = 'running';
        appearOnScroll.unobserve(entry.target);
    });
}, options);

faders.forEach(fader => {
    fader.style.animationPlayState = 'paused';
    appearOnScroll.observe(fader);
});
