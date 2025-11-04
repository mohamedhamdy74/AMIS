// Invoice Modal Functions
function openInvoiceModal() {
    const modal = document.getElementById('invoiceModal');
    if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function closeInvoiceModal() {
    const modal = document.getElementById('invoiceModal');
    if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

function shareInvoice() {
    // Simple share functionality - you can enhance this
    if (navigator.share) {
        navigator.share({
            title: 'الفاتورة',
            text: 'مشاركة الفاتورة',
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('تم نسخ رابط الفاتورة إلى الحافظة');
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero-slider");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const indicators = document.querySelectorAll(".indicator");

  // Array of background images
  const images = [
    "./imgs/homeimg.png",
    "./imgs/homepage2.jpg", // Add more images as needed
  ];

  let currentIndex = 0;

  // Function to update background image
  function updateBackground() {
    heroSection.style.backgroundImage = `url('${images[currentIndex]}')`;
    // Update indicators
    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  // Next button click
  if (nextBtn) {
    nextBtn.addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % images.length;
      updateBackground();
    });
  }

  // Previous button click
  if (prevBtn) {
    prevBtn.addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateBackground();
    });
  }

  // Indicator click
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      currentIndex = index;
      updateBackground();
    });
  });

  // Auto slide (optional)
  setInterval(function () {
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

// map handler
// Show video title on hover
function showVideoTitle(videoNumber) {
  const title = document.getElementById(`video-title-${videoNumber}`);
  title.classList.remove("hidden");
}

// Hide video title
function hideVideoTitle(videoNumber) {
  const title = document.getElementById(`video-title-${videoNumber}`);
  title.classList.add("hidden");
}

// Play main video
function playMainVideo() {
  alert("تشغيل الفيديو الرئيسي");
  // هنا تقدر تفتح modal أو تشغل فيديو
}

// Dynamic scroll indicators for services section
document.addEventListener("DOMContentLoaded", function () {
  const servicesContainer = document.querySelector(".modern-scroll");
  const dotsContainer = document.querySelector(".flex.justify-center.gap-2.lg\\:hidden");

  if (servicesContainer && dotsContainer) {
    // Get the number of service items
    const serviceItems = servicesContainer.querySelectorAll(".flex-shrink-0.w-\\[150px\\].lg\\:w-auto");
    const numServices = serviceItems.length;

    // Clear existing dots
    dotsContainer.textContent = '';

    // Create dynamic dots
    for (let i = 0; i < numServices; i++) {
      const dot = document.createElement('div');
      dot.className = "w-3 h-3 bg-gray-300 rounded-full cursor-pointer";
      dotsContainer.appendChild(dot);
    }

    // Get the newly created indicators
    const indicators = dotsContainer.querySelectorAll('.w-3');

    function updateIndicators() {
      const scrollLeft = servicesContainer.scrollLeft;
      const itemWidth = 90 + 16; // 150px width + 16px gap (gap-4 = 1rem = 16px)

      // Calculate which item is most visible in the viewport
      // Since scrollLeft can be negative (RTL), we need to handle it properly
      const absoluteScroll = Math.abs(scrollLeft);
      const activeIndex = Math.floor(absoluteScroll / itemWidth);

      // Ensure activeIndex is within bounds
      const clampedIndex = Math.max(0, Math.min(activeIndex, indicators.length - 1));


      indicators.forEach((indicator, index) => {
        if (index === clampedIndex) {
          indicator.classList.remove("bg-gray-300");
          indicator.classList.add("bg-sky-700", "border-2", "border-white", "outline", "outline-sky-700");
        } else {
          indicator.classList.remove("bg-sky-700", "border-2", "border-white", "outline", "outline-sky-700");
          indicator.classList.add("bg-gray-300");
        }
      });
    }

    servicesContainer.addEventListener("scroll", updateIndicators);
    updateIndicators(); // Initial call
  }

  // Toggle branches visibility on mobile
  const toggleBranchesBtn = document.getElementById("toggleBranches");
  const branchesContainer = document.getElementById("branchesContainer");

  if (toggleBranchesBtn && branchesContainer) {
    toggleBranchesBtn.addEventListener("click", function () {
      branchesContainer.classList.toggle("hidden");
      if (branchesContainer.classList.contains("hidden")) {
        toggleBranchesBtn.textContent = "عرض جميع الفروع";
      } else {
        toggleBranchesBtn.textContent = "إخفاء الفروع";
      }
    });
  }
});

// Initialize Leaflet Map
function initMap() {
  // Check if Leaflet is available
  if (typeof L === 'undefined') {
    console.warn('Leaflet library not loaded');
    return;
  }

  // إحداثيات القاهرة (المركز)
  const cairoCenter = [30.0444, 31.2357];

  // إنشاء الخريطة
  const map = L.map("mapp").setView(cairoCenter, 11);

  // إضافة طبقة الخريطة من OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19,
  }).addTo(map);

  // بيانات الفروع
  const branches = [
    {
      name: "27 شارع عباس - الدور الخامس",
      address: "شقة 805 - الدقي - القاهرة",
      phone: "02-26793013",
          coords: [30.0378, 31.2108], // الدقي
      img:"./imgs/branch.png"
    },
    {
      name: "9 أ في مجمع حسن فتحي",
      address: "المنطقة السادسة - مدينة نصر",
      phone: "02-26711055",
      coords: [30.0594, 31.3362], // مدينة نصر
      img: "./imgs/branch.png"
    },
    {
      name: "30 شارع شريف - وسط البلد",
      address: "بناية تجاريين القاهرة",
      phone: "02-25768490",
      coords: [30.0499, 31.2381], // وسط البلد
      img: "./imgs/branch.png"
    },
    {
      name: "29 امتداد رمسيس - العباسية",
      address: "النقابة العامة للتجاريين",
      phone: "02-26784900",
      coords: [30.0715, 31.2805], // العباسية
      img: "./imgs/branch.png"
    },
  ];

  // إنشاء أيقونة مخصصة للماركرز
  const customIcon = L.divIcon({
    className: "custom-marker",
    html: '<div style="background-color: #0166B3; width: 30px; height: 30px; border-radius: 50%; border: 4px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.3);"></div>',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

 // إضافة الماركرز على الخريطة
 branches.forEach((branch, index) => {
   const marker = L.marker(branch.coords, { icon: customIcon }).addTo(map);

   // إضافة popup عند الضغط على الماركر
   const isMobile = window.innerWidth < 1024;
   let popupContent;
   if (isMobile) {
     popupContent = `<div style="width: 100px; height: 100px; border-radius: 50%; overflow: hidden; border: 4px solid white; box-shadow: 0 4px 10px rgba(0,0,0,0.3);"><img src="${branch.img}" alt="صورة الفرع" style="width: 100%; height: 100%; object-fit: cover;"></div>`;
   } else {
     popupContent = `
       <div class="popup-content w-full bg-white h-full font-cairo">
           <div class=" flex gap-3 ">

               <div class="flex-grow ">

                   <div class="text-right mb-4">
                       <h3 class="font-bold text-base leading-snug text-gray-800">
                           ${branch.name}
                       </h3>
                       <p class="text-sm text-gray-600 leading-snug">
                           ${branch.address}
                       </p>
                   </div>

                   <div class="w-full h-px bg-gray-200 my-2"></div>

                   <div class="flex justify-between items-center mt-3">
                      
                       <div class="flex items-center gap-2">
                           <div class="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center text-white text-xs">
                               <i class="fas fa-phone"></i>
                           </div>
                           <span class="text-gray-800 text-sm font-semibold">${branch.phone}</span>
                       </div>
                       <button class="bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold py-1 px-2 rounded-full transition-colors duration-200">
                           التفاصيل
                       </button>

                   </div>
               </div>

               <div class="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                   <img src="${branch.img}" alt="صورة الفرع" class="w-full h-full object-cover">
               </div>

           </div>
       </div>
     `;
   }
   marker.bindPopup(popupContent, {maxWidth: isMobile ? 100 : 350});
   if (index === 0) {
     marker.openPopup();
   }
 });

} // end initMap

// تشغيل الخريطة عند تحميل الصفحة
window.addEventListener("load", initMap);


// medical network map
function initMap2() {
       // Check if Leaflet is available
       if (typeof L === 'undefined') {
         console.warn('Leaflet library not loaded for map2');
         return;
       }

       // Initialize map centered on Cairo (approximate location)
        const map = L.map('map2').setView([30.0444, 31.2357], 15);

       // Add OpenStreetMap tile layer
       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
           attribution: '© OpenStreetMap contributors',
           maxZoom: 19
       }).addTo(map);

       // Create custom icon
       const customIcon = L.divIcon({
           className: 'custom-marker',
           html: `
               <div class="bg-red-500 w-10 h-10 rounded-full border-4 border-white shadow-lg flex items-center justify-center transform -rotate-45" style="border-radius: 50% 50% 50% 0;">
                   <svg class="w-5 h-5 text-white transform rotate-45" fill="currentColor" viewBox="0 0 20 20">
                       <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                   </svg>
               </div>
           `,
           iconSize: [40, 40],
           iconAnchor: [20, 40],
           popupAnchor: [0, -40]
       });

       // Add marker
       const marker = L.marker([30.0444, 31.2357], { icon: customIcon }).addTo(map);

       // Add popup to marker
       marker.bindPopup(`
           <div class="font-cairo text-right" dir="rtl">
               <strong class="text-sm">27 شارع عرابي</strong><br>
               <span class="text-xs text-gray-600">الدور الثامن - شقة 805<br>التوفيقية - القاهرة</span>
           </div>
       `);
}
initMap2();
// medical network map in mobile view
function initMap3() {
      // Check if Leaflet is available
      if (typeof L === 'undefined') {
        console.warn('Leaflet library not loaded for map3');
        return;
      }

      // Initialize map centered on Cairo (approximate location)
       const mapm = L.map('map3').setView([30.0444, 31.2357], 15);

       // Add OpenStreetMap tile layer
       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
           attribution: '© OpenStreetMap contributors',
           maxZoom: 19
       }).addTo(mapm);

       // Create custom icon
       const customIconm = L.divIcon({
           className: 'custom-marker',
           html: `
               <div class="bg-red-500 w-10 h-10 rounded-full border-4 border-white shadow-lg flex items-center justify-center transform -rotate-45" style="border-radius: 50% 50% 50% 0;">
                   <svg class="w-5 h-5 text-white transform rotate-45" fill="currentColor" viewBox="0 0 20 20">
                       <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                   </svg>
               </div>
           `,
           iconSize: [40, 40],
           iconAnchor: [20, 40],
           popupAnchor: [0, -40]
       });

       // Add marker
       const markerm = L.marker([30.0444, 31.2357], { icon: customIconm }).addTo(mapm);

       // Add popup to marker
       markerm.bindPopup(`
           <div class="font-cairo text-right" dir="rtl">
               <strong class="text-sm">27 شارع عرابي</strong><br>
               <span class="text-xs text-gray-600">الدور الثامن - شقة 805<br>التوفيقية - القاهرة</span>
           </div>
       `);
}
initMap3();

//modal subscription form
function openModal() {
    document.getElementById('mobileForm').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    document.getElementById('mobileForm').classList.add('hidden');
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside
document.addEventListener('DOMContentLoaded', function() {
    const mobileForm = document.getElementById('mobileForm');
    if (mobileForm) {
        mobileForm.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }

    // Add event listener for mobile button
    const showFormBtnMobile = document.getElementById('showFormBtnMobile');
    if (showFormBtnMobile) {
        showFormBtnMobile.addEventListener('click', function() {
            openModal();
        });
    }

    // Add event listener for close button
    const closeModalBtn = document.getElementById('closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            closeModal();
        });
    }
});

        document.querySelectorAll('input[type="file"]').forEach(input => {
            input.addEventListener('change', function (e) {
                const fileName = e.target.files[0]?.name;
                if (fileName) {
                    const label = e.target.closest('label');
                    const textElement = label.querySelector('p.text-xs');
                    textElement.textContent = `تم اختيار: ${fileName}`;
                    textElement.classList.add('text-[#0166B3]', 'font-semibold');
                }
            });
        });
        document.getElementById('toggleSearch').addEventListener('click', function () {
            const input = document.getElementById('searchInput');
            input.classList.toggle('hidden');
            if (!input.classList.contains('hidden')) {
                input.focus();
            }
        });

// FAQ Collapse Functionality
function toggleCollapse(faqId) {
    const content = document.getElementById(`content-${faqId}`);
    const icon = document.getElementById(`icon-${faqId}`);

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
    } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
    }
}







    document.getElementById('toggleSearch').addEventListener('click', function () {
      const input = document.getElementById('searchInput');
      input.classList.toggle('hidden');
      if (!input.classList.contains('hidden')) {
        input.focus();
      }
    });



            document.querySelectorAll('input[type="file"]').forEach((input) => {
              input.addEventListener("change", function (e) {
                const fileName = e.target.files[0]?.name;
                if (fileName) {
                  const label = e.target.closest("label");
                  const textElement = label.querySelector("p.text-xs");
                  textElement.textContent = `تم اختيار: ${fileName}`;
                  textElement.classList.add("text-[#0166B3]", "font-semibold");
                }
              });
            });
            document
              .getElementById("toggleSearch")
              .addEventListener("click", function () {
                const input = document.getElementById("searchInput");
                input.classList.toggle("hidden");
                if (!input.classList.contains("hidden")) {
                  input.focus();
                }
              });