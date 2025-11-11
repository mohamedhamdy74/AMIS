// Map functionality - handles all Leaflet map operations
document.addEventListener('DOMContentLoaded', function() {
    // Delay initialization to ensure Leaflet is loaded
    setTimeout(function() {
        // Initialize main map if element exists
        const mapElement = document.getElementById('mapp');
        if (mapElement && typeof L !== 'undefined') {
            initMap();
        }

        // Initialize map2 if element exists
        const map2Element = document.getElementById('map2');
        if (map2Element && typeof L !== 'undefined') {
            initMap2();
        }

        // Initialize map3 if element exists
        const map3Element = document.getElementById('map3');
        if (map3Element && typeof L !== 'undefined') {
            initMap3();
        }
    }, 100);
});

// Initialize Leaflet Map
function initMap() {
    // Check if Leaflet is available
    if (typeof L === 'undefined') {
        console.warn('Leaflet library not loaded');
        return;
    }

    const mapElement = document.getElementById('mapp');
    if (!mapElement) {
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
            img: "../imgs/branch.png"
        },
        {
            name: "9 أ في مجمع حسن فتحي",
            address: "المنطقة السادسة - مدينة نصر",
            phone: "02-26711055",
            coords: [30.0594, 31.3362], // مدينة نصر
            img: "../imgs/branch.png"
        },
        {
            name: "30 شارع شريف - وسط البلد",
            address: "بناية تجاريين القاهرة",
            phone: "02-25768490",
            coords: [30.0499, 31.2381], // وسط البلد
            img: "../imgs/branch.png"
        },
        {
            name: "29 امتداد رمسيس - العباسية",
            address: "النقابة العامة للتجاريين",
            phone: "02-26784900",
            coords: [30.0715, 31.2805], // العباسية
            img: "../imgs/branch.png"
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
        marker.bindPopup(popupContent, { maxWidth: isMobile ? 100 : 350 });
        if (index === 0) {
            marker.openPopup();
        }
    });
}

// medical network map
function initMap2() {
    // Check if Leaflet is available
    if (typeof L === 'undefined') {
        console.warn('Leaflet library not loaded for map2');
        return;
    }

    const map2Element = document.getElementById('map2');
    if (!map2Element) {
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

// medical network map in mobile view
function initMap3() {
    // Check if Leaflet is available
    if (typeof L === 'undefined') {
        console.warn('Leaflet library not loaded for map3');
        return;
    }

    const map3Element = document.getElementById('map3');
    if (!map3Element) {
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
            img: "../imgs/branch.png"
        },
        {
            name: "9 أ في مجمع حسن فتحي",
            address: "المنطقة السادسة - مدينة نصر",
            phone: "02-26711055",
            coords: [30.0594, 31.3362], // مدينة نصر
            img: "../imgs/branch.png"
        },
        {
            name: "30 شارع شريف - وسط البلد",
            address: "بناية تجاريين القاهرة",
            phone: "02-25768490",
            coords: [30.0499, 31.2381], // وسط البلد
            img: "../imgs/branch.png"
        },
        {
            name: "29 امتداد رمسيس - العباسية",
            address: "النقابة العامة للتجاريين",
            phone: "02-26784900",
            coords: [30.0715, 31.2805], // العباسية
            img: "../imgs/branch.png"
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
        marker.bindPopup(popupContent, { maxWidth: isMobile ? 100 : 350 });
        if (index === 0) {
            marker.openPopup();
        }
    });
}

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