document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".input-grid");
    const emailInput = form.querySelector('input[name="email"]');
    const phoneInput = form.querySelector('input[name="phone"]');
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");

    function validateForm() {
        let isValid = true;
        emailError.textContent = "";
        phoneError.textContent = "";
        emailInput.classList.remove("error-input");
        phoneInput.classList.remove("error-input");

        // Email validation
        const emailValue = emailInput.value;
        if (!validateEmail(emailValue)) {
            emailError.textContent = "Invalid email format";
            emailInput.classList.add("error-input");
            isValid = false;
        }

        // Phone number validation
        const phoneValue = phoneInput.value;
        if (!validatePhone(phoneValue)) {
            phoneError.textContent = "Invalid phone number format";
            phoneInput.classList.add("error-input");
            isValid = false;
        }

        return isValid;
    }

    form.addEventListener("submit", function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    const discardButton = document.querySelector(".button-1");
    discardButton.addEventListener("click", function () {
        // Clear any previous error messages and styles
        emailError.textContent = "";
        phoneError.textContent = "";
        emailInput.classList.remove("error-input");
        phoneInput.classList.remove("error-input");
    });

    const submitButton = document.querySelector(".button-2");
    submitButton.addEventListener("click", function (event) {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        // Use a regular expression for email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePhone(phone) {
        // Use a regular expression for phone number validation
        const phonePattern = /^[0-9]{10}$/; // Change the pattern as needed
        return phonePattern.test(phone);
    }
});
