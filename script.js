document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    const cursorBlur = document.getElementById('cursor-blur');

    // Custom Cursor following
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorBlur.style.left = e.clientX + 'px';
        cursorBlur.style.top = e.clientY + 'px';

        // Background blob influence
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 30;
            blob.style.transform = `translate(${(x - 0.5) * speed}px, ${(y - 0.5) * speed}px)`;
        });
    });

    // Hover effect for cursor
    document.querySelectorAll('.card, .stat-item, span, h1, h2').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(4)';
            cursor.style.background = 'rgba(255,179,71,0.2)';
            cursor.style.border = '1px solid white';
        });
        item.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'white';
            cursor.style.border = 'none';
        });
    });

    // Intersection Observer for scroll reveal
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // Subtle tilt effect for cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
        });
    });
});
