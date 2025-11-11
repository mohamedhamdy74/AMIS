// Background slider functionality
document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.querySelector('.hero-slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.indicator');

    // Array of background images
    const images = [
        '../imgs/homeimg.png',
        '../imgs/homepage2.jpg', // Add more images as needed
    ];

    let currentIndex = 0;

    // Function to update background image
    function updateBackground() {
        if (heroSection) {
            heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
            // Update indicators
            indicators.forEach((indicator, index) => {
                if (indicator) {
                    if (index === currentIndex) {
                        indicator.classList.add('active');
                    } else {
                        indicator.classList.remove('active');
                    }
                }
            });
        }
    }

    // Next button click
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % images.length;
            updateBackground();
        });
    }

    // Previous button click
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateBackground();
        });
    }

    // Indicator click
    indicators.forEach((indicator, index) => {
        if (indicator) {
            indicator.addEventListener('click', function() {
                currentIndex = index;
                updateBackground();
            });
        }
    });

    // Auto slide (optional)
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateBackground();
    }, 5000); // Change image every 5 seconds

    // Initialize only if heroSection exists
    if (heroSection) {
        updateBackground();
    }
});

// Traditional onclick functions for hero slider
function nextSlide() {
    const heroSection = document.querySelector('.hero-slider');
    if (heroSection) {
        const images = ['../imgs/homeimg.png', '../imgs/homepage2.jpg'];
        let currentIndex = 0;
        currentIndex = (currentIndex + 1) % images.length;
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    }
}

function prevSlide() {
    const heroSection = document.querySelector('.hero-slider');
    if (heroSection) {
        const images = ['../imgs/homeimg.png', '../imgs/homepage2.jpg'];
        let currentIndex = 0;
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    }
}

// Traditional onclick functions for offers slider
function nextOffer() {
    // Add offer slider logic here if needed
    console.log('Next offer clicked');
}

function prevOffer() {
    // Add offer slider logic here if needed
    console.log('Previous offer clicked');
}