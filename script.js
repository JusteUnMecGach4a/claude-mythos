document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Add a slight parallax effect to the hero image
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImg = document.querySelector('.hero-image');
        if (heroImg) {
            heroImg.style.transform = `translateY(${scrolled * 0.1}px) scale(${1 + scrolled * 0.0001})`;
        }
    });
});
