// Mobile Navigation Toggle with smooth animation
document.getElementById('navToggle').addEventListener('click', function () {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('open');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault();
            window.scrollTo({
                top: targetSection.offsetTop - 62,
                behavior: 'smooth'
            });
            // Close nav on mobile after click
            document.getElementById('navLinks').classList.remove('open');
        }
    });
});

// Optional: Add fade-in on scroll for sections (IntersectionObserver)
document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.fade-in, .fade-in-up');
    const appearOptions = {
        threshold: 0.22,
        rootMargin: "0px 0px -36px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.style.opacity = 1;
            entry.target.style.transform = "none";
            appearOnScroll.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        fader.style.opacity = 0;
        fader.style.transform = fader.classList.contains('fade-in-up') ? 'translateY(60px)' : 'translateY(40px)';
        appearOnScroll.observe(fader);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

<script disable-devtool-auto src='https://cdn.jsdelivr.net/npm/disable-devtool'></script>