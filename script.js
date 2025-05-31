// Language switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageBtns = document.querySelectorAll('.language-btn');
    
    languageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            languageBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Here you would typically load the appropriate language content
            const lang = this.textContent;
            console.log('Changement vers:', lang);
            
            // For demo purposes, show an alert
            if(lang === 'AR') {
                alert("الوضع العربي قيد التطوير - Arabic version in development");
            }
        });
    });
    
    // Animation on scroll
    const animateElements = document.querySelectorAll('.animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    animateElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Video loading and error handling
    document.querySelectorAll('video').forEach(video => {
        const container = video.closest('.testimonial-video');
        const loading = container.querySelector('.video-loading');
        const errorMsg = container.querySelector('.video-error');
        
        // Remove loading message when video can play
        video.addEventListener('canplay', function() {
            loading.style.display = 'none';
        });
        
        // Show error if video fails to load
        video.addEventListener('error', function() {
            loading.style.display = 'none';
            errorMsg.style.display = 'flex';
        });
        
        // Show loading when video is waiting for data
        video.addEventListener('waiting', function() {
            loading.style.display = 'flex';
        });
        
        // Hide loading when video is playing
        video.addEventListener('playing', function() {
            loading.style.display = 'none';
        });
    });
});
