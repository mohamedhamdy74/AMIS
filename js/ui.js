// UI and general functionality
document.addEventListener('DOMContentLoaded', function() {
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

    // Show video title on hover
    function showVideoTitle(videoNumber) {
        const title = document.getElementById(`video-title-${videoNumber}`);
        if (title) {
            title.classList.remove("hidden");
        }
    }

    // Hide video title
    function hideVideoTitle(videoNumber) {
        const title = document.getElementById(`video-title-${videoNumber}`);
        if (title) {
            title.classList.add("hidden");
        }
    }

    // Play main video
    function playMainVideo() {
        alert("تشغيل الفيديو الرئيسي");
        // هنا تقدر تفتح modal أو تشغل فيديو
    }

    // Dynamic scroll indicators for services section
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
                if (indicator) {
                    if (index === clampedIndex) {
                        indicator.classList.remove("bg-gray-300");
                        indicator.classList.add("bg-sky-700", "border-2", "border-white", "outline", "outline-sky-700");
                    } else {
                        indicator.classList.remove("bg-sky-700", "border-2", "border-white", "outline", "outline-sky-700");
                        indicator.classList.add("bg-gray-300");
                    }
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

    // FAQ Collapse Functionality
    function toggleCollapse(faqId) {
        // Close all FAQs first
        for (let i = 1; i <= 7; i++) {
            const content = document.getElementById(`content-faq${i}`);
            const icon = document.getElementById(`icon-faq${i}`);
            if (content && icon) {
                content.classList.add('hidden');
                icon.classList.remove('rotate-180');
            }
        }

        // Then open the clicked one
        const content = document.getElementById(`content-${faqId}`);
        const icon = document.getElementById(`icon-${faqId}`);
        if (content && icon) {
            content.classList.remove('hidden');
            icon.classList.add('rotate-180');
        }
    }

    // Make functions globally available
    window.openInvoiceModal = openInvoiceModal;
    window.closeInvoiceModal = closeInvoiceModal;
    window.shareInvoice = shareInvoice;
    window.showVideoTitle = showVideoTitle;
    window.hideVideoTitle = hideVideoTitle;
    window.playMainVideo = playMainVideo;
    window.toggleCollapse = toggleCollapse;
});