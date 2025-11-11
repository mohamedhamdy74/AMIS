// Form handling functionality
document.addEventListener("DOMContentLoaded", function () {
  // Modal functionality
  const showBtn = document.getElementById("showFormBtn");
  const mobileForm = document.getElementById("mobileForm");

  if (showBtn && mobileForm) {
    showBtn.addEventListener("click", () => {
      mobileForm.classList.toggle("hidden");
    });
  }

  // Handle contact form submission
  function handleSubmit(event) {
    event.preventDefault();

    // جمع البيانات من الفورم
    const formData = {
      searchTerm: event.target[0]?.value || "",
      governorate: event.target[1]?.value || "",
      serviceType: event.target[2]?.value || "",
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
  const toggleMembership = document.getElementById("toggleMembership");
  if (toggleMembership) {
    toggleMembership.addEventListener("click", function () {
      const membershipData = document.querySelector(".membership-data");
      const toggleIcon = document.getElementById("toggleMembership");

      if (membershipData) {
        if (membershipData.classList.contains("hidden")) {
          membershipData.classList.remove("hidden");
          if (toggleIcon) {
            toggleIcon.innerHTML = `
                            <circle cx="12" cy="12" r="10" fill="#0166B3" stroke="white" stroke-width="2" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                        `;
          }
        } else {
          membershipData.classList.add("hidden");
          if (toggleIcon) {
            toggleIcon.innerHTML = `
                            <circle cx="12" cy="12" r="10" fill="#0166B3" stroke="white" stroke-width="2" />
                            <rect x="7" y="11" width="10" height="2" fill="white" />
                            <rect x="11" y="7" width="2" height="10" fill="white" />
                        `;
          }
        }
      }
    });
  }

  // Expose a function to toggle membership data (for inline onclicks)
  function toggleMembershipData() {
    const membershipData = document.querySelector(".membership-data");
    const toggleIcon = document.getElementById("toggleMembership");

    if (membershipData) {
      if (membershipData.classList.contains("hidden")) {
        membershipData.classList.remove("hidden");
        if (toggleIcon) {
          toggleIcon.innerHTML = `
            <circle cx="12" cy="12" r="10" fill="#0166B3" stroke="white" stroke-width="2" />
            <rect x="7" y="11" width="10" height="2" fill="white" />
          `;
        }
      } else {
        membershipData.classList.add("hidden");
        if (toggleIcon) {
          toggleIcon.innerHTML = `
            <circle cx="12" cy="12" r="10" fill="#0166B3" stroke="white" stroke-width="2" />
            <rect x="7" y="11" width="10" height="2" fill="white" />
            <rect x="11" y="7" width="2" height="10" fill="white" />
          `;
        }
      }
    }
  }
  window.toggleMembershipData = toggleMembershipData;

  // Toggle the entire section
  const toggleSectionBtn = document.getElementById("toggleMembership");
  if (toggleSectionBtn) {
    toggleSectionBtn.addEventListener("click", function () {
      const sectionToToggle = document.querySelector(".section-to-toggle");
      if (sectionToToggle) {
        sectionToToggle.classList.toggle("hidden");
      }
    });
  }

  // Toggle the form card
  const showFormBtn = document.getElementById("showFormBtn");
  if (showFormBtn) {
    showFormBtn.addEventListener("click", function () {
      const formCard = document.querySelector(".form-card");
      if (formCard) {
        formCard.classList.toggle("md:block");
        console.log("Toggled form card");
      }
    });
  }

  // Expose a function to toggle the form card (for inline onclicks)
  function toggleFormCard() {
    const formCard = document.querySelector(".form-card");
    if (formCard) {
      formCard.classList.toggle("md:hidden");
    }
  }
  window.toggleFormCard = toggleFormCard;

  // Modal subscription form
  function openModal() {
    const modal = document.getElementById("mobileForm");
    if (modal) {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    }
  }

  function closeModal() {
    const modal = document.getElementById("mobileForm");
    if (modal) {
      modal.classList.add("hidden");
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  }

  // Expose modal functions to global scope so inline handlers can call them
  window.openModal = openModal;
  window.closeModal = closeModal;

  // Close modal when clicking outside
  const mobileFormModal = document.getElementById("mobileForm");
  if (mobileFormModal) {
    mobileFormModal.addEventListener("click", function (e) {
      if (e.target === this) {
        closeModal();
      }
    });

    // Add event listener for mobile button
    const showFormBtnMobile = document.getElementById("showFormBtnMobile");
    if (showFormBtnMobile) {
      showFormBtnMobile.addEventListener("click", function () {
        openModal();
      });
    }

    // Add event listener for close button
    const closeModalBtn = document.getElementById("closeModalBtn");
    if (closeModalBtn) {
      closeModalBtn.addEventListener("click", function () {
        closeModal();
      });
    }
  }

  // Provide a handler usable by inline onclick on the overlay
  function handleModalClick(e) {
    if (e.target && e.target.id === "mobileForm") {
      closeModal();
    }
  }
  window.handleModalClick = handleModalClick;

  // Expose mobile show function for inline onclick (alias to openModal)
  window.showMobileForm = openModal;

  // File upload handling
  function handleFileChange(e) {
    const fileName = e.target.files[0]?.name;
    if (fileName) {
      const label = e.target.closest("label");
      if (label) {
        const textElement = label.querySelector("p.text-xs");
        if (textElement) {
          textElement.textContent = `تم اختيار: ${fileName}`;
          textElement.classList.add("text-[#0166B3]", "font-semibold");
        }
      }
    }
  }

  // Attach handler to file inputs and expose globally for inline onchange
  document.querySelectorAll('input[type="file"]').forEach((input) => {
    input.addEventListener("change", handleFileChange);
  });

  window.handleFileChange = handleFileChange;

  // Search toggle
  const toggleSearch = document.getElementById("toggleSearch");
  const searchInput = document.getElementById("searchInput");
  if (toggleSearch && searchInput) {
    toggleSearch.addEventListener("click", function () {
      searchInput.classList.toggle("hidden");
      if (!searchInput.classList.contains("hidden")) {
        searchInput.focus();
      }
    });
  }
});

// Traditional onclick function for search toggle
function toggleSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.classList.toggle("hidden");
    if (!searchInput.classList.contains("hidden")) {
      searchInput.focus();
    }
  }
}
