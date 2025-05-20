const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
const usernameInput = document.getElementById("username");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const form = document.getElementById("registrationForm");
const submitBtn = document.getElementById("submit-btn");

const USER_NAME_KEY = 'savedUsername';

usernameInput.addEventListener("blur", function () {
    if (usernameInput.validity.valueMissing) {
        usernameInput.setCustomValidity("Please enter a username.");
    } else if (usernameInput.validity.tooShort) {
        usernameInput.setCustomValidity("Username must be at least 3 characters long.");
    } else {
        usernameInput.setCustomValidity ("");
    }
    usernameError.textContent = usernameInput.validationMessage;
    });
// Show custom error on email blur
emailInput.addEventListener('blur', function() {
  if (emailInput.validity.valueMissing) {
    emailInput.setCustomValidity('Please enter a valid email address.');
  } else {
    emailInput.setCustomValidity('');
  }
emailError.textContent = emailInput.validationMessage;
});

// Show custom error on password blur
passwordInput.addEventListener('blur', function() {
 const pwd = passwordInput.value;
  if (passwordInput.validity.valueMissing) {
    passwordInput.setCustomValidity('Please enter a password.');
  } else if (passwordInput.validity.tooShort) {
    passwordInput.setCustomValidity('Password must be at least 8 characters long.');
  }
  else if (
    !pwd.match(/[a-z]/) ||  // no lowercase
    !pwd.match(/[A-Z]/) ||  // no uppercase
    !pwd.match(/[0-9]/)     // no digit
    // || !pwd.match(/[^a-zA-Z\d]/) // uncomment to require special character
  ) {
    passwordInput.setCustomValidity("Password must include uppercase, lowercase, and a number.");
  }  else {
    passwordInput.setCustomValidity('');
  }
  passwordError.textContent = passwordInput.validationMessage;
  
});
// Show custom error on confirm password blur
confirmPasswordInput.addEventListener('blur', function () {
   if (confirmPasswordInput.validity.valueMissing) {
    confirmPasswordInput.setCustomValidity('Please confirm your password.');
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.setCustomValidity('Passwords do not match.');
  } else {
    confirmPasswordInput.setCustomValidity('');
  }
  confirmPasswordError.textContent = confirmPasswordInput.validationMessage;
  
});

// Optional: Prevent default form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop form from submitting

    if (!usernameInput.checkValidity()) {
    usernameInput.reportValidity();
    return;
  }

  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    return;
  }

  if (!passwordInput.checkValidity()) {
    passwordInput.reportValidity();
    return;
  }

  if (!confirmPasswordInput.checkValidity()) {
    confirmPasswordInput.reportValidity();
    return;
  }

  alert("Registration successful!");
  localStorage.setItem(USER_NAME_KEY, usernameInput.value);
  form.reset(); // Reset the form
});

// get the saved username from local storage 
  window.addEventListener('DOMContentLoaded', function () {
  const savedUsername = localStorage.getItem(USER_NAME_KEY);
  
    usernameInput.value = savedUsername;
  
});