document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.indicator');

    // Array of background images
    const images = [
        '/imgs/homeimg.png',
        '/imgs/homeimg.png', // Add more images as needed
    ];

    let currentIndex = 0;

    // Function to update background image
    function updateBackground() {
        heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // Next button click
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateBackground();
    });

    // Previous button click
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateBackground();
    });

    // Indicator click
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentIndex = index;
            updateBackground();
        });
    });

    // Auto slide (optional)
    setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateBackground();
    }, 5000); // Change image every 5 seconds

    // Initialize
    updateBackground();
});
 
 
// handle contact form 

        function handleSubmit(event) {
          event.preventDefault();

          // جمع البيانات من الفورم
          const formData = {
            searchTerm: event.target[0].value,
            governorate: event.target[1].value,
            serviceType: event.target[2].value,
          };

          console.log("بيانات البحث:", formData);

          // هنا تقدر تعمل API call أو أي logic تاني
          alert("جاري البحث في الشبكة الطبية...");

          // مثال: لو عايز تعمل validation
          if (!formData.governorate || !formData.serviceType) {
            alert("برجاء اختيار المحافظة ونوع الجهة");
            return;
          }
        }