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
    const showBtn = document.getElementById('showFormBtn');
  const mobileForm = document.getElementById('mobileForm');

  showBtn.addEventListener('click', () => {
    mobileForm.classList.toggle('hidden'); // يظهر أو يخفي الفورم
   
  });
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
 
const addButton = document.getElementById('addMemberBtn');
const mobileForm = document.getElementById('mobileForm');











 
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

// Toggle membership data section
document.addEventListener('DOMContentLoaded', function() {
  const toggleMembership = document.getElementById('toggleMembership');
  if (toggleMembership) {
    toggleMembership.addEventListener('click', function() {
      const membershipData = document.querySelector('.membership-data');
      const toggleIcon = document.getElementById('toggleMembership');

      if (membershipData.classList.contains('hidden')) {
        membershipData.classList.remove('hidden');
        toggleIcon.innerHTML = `
          <circle cx="12" cy="12" r="10" fill="#0166B3" stroke="white" stroke-width="2" />
          <rect x="7" y="11" width="10" height="2" fill="white" />
        `;
      } else {
        membershipData.classList.add('hidden');
        toggleIcon.innerHTML = `
          <circle cx="12" cy="12" r="10" fill="#0166B3" stroke="white" stroke-width="2" />
          <rect x="7" y="11" width="10" height="2" fill="white" />
          <rect x="11" y="7" width="2" height="10" fill="white" />
        `;
      }
    });
  }

  // Toggle the entire section
  const toggleSectionBtn = document.getElementById('toggleMembership');
  if (toggleSectionBtn) {
    toggleSectionBtn.addEventListener('click', function() {
      const sectionToToggle = document.querySelector('.section-to-toggle');
      if (sectionToToggle) {
        sectionToToggle.classList.toggle('hidden');
      }
    });
  }

  // Toggle the form card
  const showFormBtn = document.getElementById('showFormBtn');
  if (showFormBtn) {
    showFormBtn.addEventListener('click', function() {
      const formCard = document.querySelector('.form-card');
      if (formCard) {
        formCard.classList.toggle('md:hidden');
        console.log('Toggled form card');
      }
    });
  }
});
