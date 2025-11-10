// Navigation Toggle
document.getElementById('navToggle')?.addEventListener('click', function() {
    document.getElementById('navLinks')?.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .fade-in-up').forEach((element) => {
    observer.observe(element);
});

// Dynamic Date Update
document.addEventListener('DOMContentLoaded', () => {
    const timestamp = document.querySelector('.timestamp');
    if (timestamp) {
        timestamp.textContent = `Last Updated: ${new Date().toUTCString()}`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Toggle menu
    navToggle?.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks?.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', 
            navToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
        );
    });

    // Handle navigation clicks
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Close mobile menu if open
            navLinks?.classList.remove('open');
            navToggle?.setAttribute('aria-expanded', 'false');
            
            // Get target section
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Calculate scroll position accounting for fixed navbar
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (navLinks?.classList.contains('open') && 
            !navToggle?.contains(e.target) && 
            !navLinks?.contains(e.target)) {
            navLinks.classList.remove('open');
            navToggle?.setAttribute('aria-expanded', 'false');
        }
    });
});