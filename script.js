document.addEventListener("DOMContentLoaded", () => {
  // ---------------- MOBIEL MENU ----------------
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active"); // menu openen/sluiten
      menuToggle.classList.toggle("active"); // hamburger animatie
    });
  }

  // ---------------- FADE-IN ANIMATIES ----------------
  const fadeEls = document.querySelectorAll(".fade-in");
  if (fadeEls.length) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // alleen één keer animatie
          }
        });
      },
      { threshold: 0.2 } // start animatie als 20% zichtbaar
    );
    fadeEls.forEach((el) => observer.observe(el));
  }

  // ---------------- PARALLAX HERO ----------------
  const hero = document.querySelector(".hero-bg");
  if (hero) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      hero.style.transform = `translateY(${scrollY * 0.2}px)`; // langzame beweging
    });
  }
});
