// ===== NAVIGATION TOGGLE =====
var navToggle = document.getElementById("navToggle");
var navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", function() {
        var expanded = navToggle.getAttribute("aria-expanded") === "true";
        navToggle.setAttribute("aria-expanded", !expanded);
        if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
        } else {
            navMenu.classList.add("active");
        }
    });
}

// ===== SMOOTH SCROLLING =====
function navigateToSection(id) {
    var section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
    if (window.innerWidth <= 768) {
        if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
        }
        navToggle.setAttribute("aria-expanded", "false");
    }
}

// ===== HERO DEMO BUTTON =====
function playDemo() {
    alert("🎥 Demo video placeholder — I'll upload soon.");
}

// ===== FAQ ACCORDION =====
var faqQuestions = document.querySelectorAll(".faq-question");

for (var i = 0; i < faqQuestions.length; i++) {
    faqQuestions[i].addEventListener("click", function() {
        var expanded = this.getAttribute("aria-expanded") === "true";
        this.setAttribute("aria-expanded", !expanded);
        
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            this.classList.add("active");
        }
        
        var answer = this.nextElementSibling;
        if (answer.classList.contains("open")) {
            answer.classList.remove("open");
        } else {
            answer.classList.add("open");
        }

        var icon = this.querySelector(".toggle-icon");
        if (icon) {
            if (icon.classList.contains("fa-plus")) {
                icon.classList.remove("fa-plus");
                icon.classList.add("fa-minus");
            } else {
                icon.classList.remove("fa-minus");
                icon.classList.add("fa-plus");
            }
        }
    });
}

// ===== FAQ FILTERS =====
var filterBtns = document.querySelectorAll(".filter-btn");
var faqItems = document.querySelectorAll(".faq-item");

for (var i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", function() {
        // Remove active class from all buttons
        for (var j = 0; j < filterBtns.length; j++) {
            filterBtns[j].classList.remove("active");
        }
        // Add active class to clicked button
        this.classList.add("active");

        var filter = this.getAttribute("data-filter");

        // Show/hide FAQ items based on filter
        for (var k = 0; k < faqItems.length; k++) {
            var item = faqItems[k];
            if (filter === "all" || item.getAttribute("data-category") === filter) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        }
    });
}

// ===== TESTIMONIALS CAROUSEL =====
var testimonials = document.querySelectorAll(".testimonial-card");
var indicators = document.querySelectorAll(".indicator");

for (var i = 0; i < indicators.length; i++) {
    indicators[i].addEventListener("click", function() {
        var clickedIndex = 0;
        
        // Find the index of the clicked indicator
        for (var j = 0; j < indicators.length; j++) {
            if (indicators[j] === this) {
                clickedIndex = j;
                break;
            }
        }
        
        // Remove active class from all testimonials and indicators
        for (var k = 0; k < testimonials.length; k++) {
            testimonials[k].classList.remove("active");
        }
        for (var l = 0; l < indicators.length; l++) {
            indicators[l].classList.remove("active");
        }

        // Add active class to selected items
        if (testimonials[clickedIndex]) {
            testimonials[clickedIndex].classList.add("active");
        }
        this.classList.add("active");
    });
}

// ===== CONTACT FORM =====
var contactForm = document.getElementById("contactForm");
var successModal = document.getElementById("successModal");

if (contactForm && successModal) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Normally you'd send this to your backend
        setTimeout(function() {
            successModal.setAttribute("aria-hidden", "false");
            successModal.classList.add("active");
            contactForm.reset();
        }, 500);
    });
}

function resetForm() {
    if (contactForm) {
        contactForm.reset();
    }
}

// ===== MODAL =====
function closeModal() {
    if (successModal) {
        successModal.setAttribute("aria-hidden", "true");
        successModal.classList.remove("active");
    }
}

// Close modal on background click
if (successModal) {
    successModal.addEventListener("click", function(e) {
        if (e.target === successModal) {
            closeModal();
        }
    });
}

// ESC key closes modal
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && successModal && successModal.classList.contains("active")) {
        closeModal();
    }
});