// =========================
// MOBILE NAVBAR
// =========================
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

// Open / Close Menu
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Close menu after clicking link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// =========================
// SCROLL REVEAL
// =========================
const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);
reveals.forEach(element => {
    revealObserver.observe(element);
});