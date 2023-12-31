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
      
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePhone(phone) {
      
        const phonePattern = /^[0-9]{10}$/; 
        return phonePattern.test(phone);
    }

const dialogContainer = document.getElementById("dialogContainer");
const dialogClose = document.getElementById("dialogClose");

function openDialogBox() {
    dialogContainer.style.display = "flex";
}

function closeDialogBox() {
    dialogContainer.style.display = "none";
}

submitButton.addEventListener("click", function (event) {
    if (validateForm()) {
        event.preventDefault(); // Prevent default form submission
        openDialogBox();
    } else {
        event.preventDefault();
    }
});

discardButton.addEventListener("click", function () {
    closeDialogBox();
});
const dialogButton1 = document.querySelector(".button-3");
const dialogButton2 = document.querySelector(".button-4");

dialogButton1.addEventListener("click", closeDialogBox);
dialogButton2.addEventListener("click", closeDialogBox);


});
