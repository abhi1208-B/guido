const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");
const destinationCards = document.querySelectorAll(".destination-card");

function searchPlaces() {
    if (!searchInput) return;
    const searchText = searchInput.value.toLowerCase().trim();

    destinationCards.forEach(function (card) {
        const placeName = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (placeName.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

if (searchButton) {
    searchButton.addEventListener("click", searchPlaces);
}

if (searchInput) {
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchPlaces();
        }
    });
}

// ==========================================
// GUIDE APPLICATION MODAL & FORM LOGIC
// ==========================================

const guideModal = document.getElementById("guideModal");
const becomeGuideBtns = document.querySelectorAll(".js-become-guide-btn");
const closeModalBtn = document.getElementById("closeModalBtn");
const cancelModalBtn = document.getElementById("cancelModalBtn");
const guideApplicationForm = document.getElementById("guideApplicationForm");
const formFeedback = document.getElementById("formFeedback");
const submitGuideBtn = document.getElementById("submitGuideBtn");

function openModal() {
    if (!guideModal) return;
    guideModal.classList.add("is-active");
    guideModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    // Focus first input
    const firstInput = guideModal.querySelector("input:not([type=hidden])");
    if (firstInput) firstInput.focus();
}

function closeModal() {
    if (!guideModal) return;
    guideModal.classList.remove("is-active");
    guideModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    clearValidationErrors();
}

becomeGuideBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        openModal();
    });
});

if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
if (cancelModalBtn) cancelModalBtn.addEventListener("click", closeModal);

// Close on backdrop click
if (guideModal) {
    guideModal.addEventListener("click", function (e) {
        if (e.target === guideModal) {
            closeModal();
        }
    });
}

// Close on Escape key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && guideModal && guideModal.classList.contains("is-active")) {
        closeModal();
    }
});

// Validation helpers
function clearValidationErrors() {
    document.querySelectorAll(".form-error").forEach(function (el) {
        el.textContent = "";
    });
    document.querySelectorAll(".input-error").forEach(function (el) {
        el.classList.remove("input-error");
    });
    if (formFeedback) {
        formFeedback.style.display = "none";
        formFeedback.className = "form-feedback";
        formFeedback.textContent = "";
    }
}

function setError(fieldId, errorElementId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(errorElementId);
    if (field) field.classList.add("input-error");
    if (errorEl) errorEl.textContent = message;
}

function validateApplicationForm(data) {
    let isValid = true;
    clearValidationErrors();

    if (!data.name || data.name.trim().length < 2) {
        setError("fullName", "nameError", "Please enter your full name (at least 2 characters).");
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email.trim())) {
        setError("email", "emailError", "Please enter a valid email address.");
        isValid = false;
    }

    const phoneDigits = (data.phone || "").replace(/[^0-9]/g, "");
    if (!data.phone || phoneDigits.length < 10) {
        setError("phone", "phoneError", "Please enter a valid 10-digit phone number.");
        isValid = false;
    }

    if (!data.location) {
        setError("location", "locationError", "Please select your primary region.");
        isValid = false;
    }

    if (!data.languages || data.languages.trim().length < 2) {
        setError("languages", "languagesError", "Please mention the languages you speak.");
        isValid = false;
    }

    if (!data.specialties || data.specialties.length === 0) {
        const specError = document.getElementById("specialtiesError");
        if (specError) specError.textContent = "Please select at least one specialty area.";
        isValid = false;
    }

    if (!data.bio || data.bio.trim().length < 20) {
        setError("bio", "bioError", "Please provide a brief bio/description (at least 20 characters).");
        isValid = false;
    }

    return isValid;
}

// Form Submission
if (guideApplicationForm) {
    guideApplicationForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(guideApplicationForm);
        const specialties = formData.getAll("specialties");

        const applicationData = {
            name: formData.get("name")?.trim(),
            email: formData.get("email")?.trim(),
            phone: formData.get("phone")?.trim(),
            location: formData.get("location"),
            languages: formData.get("languages")?.trim(),
            experienceYears: formData.get("experienceYears"),
            specialties: specialties,
            bio: formData.get("bio")?.trim(),
            submittedAt: new Date().toISOString()
        };

        if (!validateApplicationForm(applicationData)) {
            return;
        }

        // Loading state
        const btnText = submitGuideBtn.querySelector(".btn-text");
        const btnSpinner = submitGuideBtn.querySelector(".btn-spinner");
        submitGuideBtn.disabled = true;
        if (btnText) btnText.style.display = "none";
        if (btnSpinner) btnSpinner.style.display = "inline";

        try {
            const response = await fetch("/api/applications", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(applicationData)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                formFeedback.className = "form-feedback success";
                formFeedback.textContent = "🎉 Application submitted successfully! Our team will review your profile and contact you soon.";
                formFeedback.style.display = "block";
                guideApplicationForm.reset();

                setTimeout(() => {
                    closeModal();
                }, 2500);
            } else {
                throw new Error(result.message || "Failed to submit application. Please try again.");
            }
        } catch (err) {
            formFeedback.className = "form-feedback error";
            formFeedback.textContent = "⚠️ " + (err.message || "Unable to reach server. Please check your connection.");
            formFeedback.style.display = "block";
        } finally {
            submitGuideBtn.disabled = false;
            if (btnText) btnText.style.display = "inline";
            if (btnSpinner) btnSpinner.style.display = "none";
        }
    });
}