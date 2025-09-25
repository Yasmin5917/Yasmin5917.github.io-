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
            observer.unobserve(entry.target); // animatie één keer
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
      hero.style.transform = `translateY(${scrollY * 0.2}px)`; // subtiele parallax
    });
  }

  // ---------------- SMOOTH SCROLL VOOR ANKER LINKS ----------------
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  // ---------------- OPTIONAL: HIGHLIGHT ACTIVE NAV ----------------
  const sections = document.querySelectorAll("main section, main .hero");
  const navItems = document.querySelectorAll(".nav-links ul li a");
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navItems.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(0,1) === "#" + entry.target.id) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.3 }
  );
  sections.forEach((sec) => sectionObserver.observe(sec));
});