document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const submitButton = document.querySelector("button[type='submit']");
  
    function validateEmail(email) {
      // Email validation logic
      return /\S+@\S+\.\S+/.test(email);
    }
  
    function validatePassword(password) {
      // Password validation logic
      return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d]).{16,18}$/.test(password);
    }
  
    function checkFormValidity() {
      const email = emailInput.value;
      const password = passwordInput.value;
      let errors = 0;
  
      if (!validateEmail(email)) {
        emailError.textContent = "Enter a valid email address.";
        errors++;
      } else {
        emailError.textContent = "";
      }
  
      if (!validatePassword(password)) {
        passwordError.textContent = "8-16 CHARACTERS, 1SPECIAL CHARACTER, 1 UPPERCASE 1 LOWERCASE, 1 NUMBER";
        errors++;
      } else {
        passwordError.textContent = "";
      }
  
      return errors === 0 && email !== "" && password !== "";
    }
  
    submitButton.addEventListener("click", function (event) {
      if (!checkFormValidity()) {
        event.preventDefault(); // Prevent form submission if there are errors or fields are not filled
      }
      window.location.href = 'add.html'
      // You can add additional logic here for redirection if needed
    });
  });
  