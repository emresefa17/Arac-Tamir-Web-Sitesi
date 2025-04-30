// Main JavaScript file for GARRAY website

document.addEventListener('DOMContentLoaded', function() {
    // Navigation menu active state
    const menuItems = document.querySelectorAll('.menu li');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Testimonial controls
    const prevButton = document.querySelector('.control-prev');
    const nextButton = document.querySelector('.control-next');
    
    if (prevButton && nextButton) {
        // This is a placeholder for testimonial functionality
        // In a real implementation, this would cycle through testimonials
        prevButton.addEventListener('click', function() {
            console.log('Previous testimonial');
            // Add logic to show previous testimonial
        });
        
        nextButton.addEventListener('click', function() {
            console.log('Next testimonial');
            // Add logic to show next testimonial
        });
    }

    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-service, .btn-contact, .btn-book');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.transition = 'transform 0.3s';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add scroll animations
    function setupAnimations() {
        // Add animation classes to sections
        document.querySelectorAll('.features-section, .stats-section, .tech-repairs-section, .choose-section, .freedom-section, .testimonial-section, .brands-section, .repair-gallery-section').forEach(section => {
            section.classList.add('animate-section');
        });

        // Add left animation to specific elements
        document.querySelectorAll('.tech-repairs-content, .freedom-content, .collage-left').forEach(element => {
            element.classList.add('animate-left');
        });

        // Add right animation to specific elements
        document.querySelectorAll('.tech-repairs-image, .freedom-image, .collage-right').forEach(element => {
            element.classList.add('animate-right');
        });

        // Add delays to choose features
        document.querySelectorAll('.choose-feature').forEach((feature, index) => {
            feature.classList.add('animate-section');
            if (index === 1) feature.classList.add('delay-200');
            if (index === 2) feature.classList.add('delay-400');
            if (index === 3) feature.classList.add('delay-600');
        });

        // Add delays to stats items
        document.querySelectorAll('.stat-item').forEach((stat, index) => {
            stat.classList.add('animate-section');
            if (index === 1) stat.classList.add('delay-200');
            if (index === 2) stat.classList.add('delay-400');
            if (index === 3) stat.classList.add('delay-600');
        });
    }

    function checkScroll() {
        const elements = document.querySelectorAll('.animate-section, .animate-left, .animate-right');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight * 0.85;
            
            if(elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    }

    // Set up animations
    setupAnimations();
    
    // Check elements on load
    checkScroll();
    
    // Check elements on scroll
    window.addEventListener('scroll', checkScroll);
}); 