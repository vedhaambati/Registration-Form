document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    clearErrors();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;

    if (firstName === "") {
      displayError("firstNameError", "First name is required.");
      isValid = false;
    }

    if (lastName === "") {
      displayError("lastNameError", "Last name is required.");
      isValid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      displayError("emailError", "Invalid email format.");
      isValid = false;
    }

    if (phone === "" || phone.length !== 10) {
      displayError("phoneError", "Phone number must be exactly 10 digits.");
      isValid = false;
    }

    if (password.length < 8) {
      displayError("passwordError", "Password must be at least 8 characters.");
      isValid = false;
    }

    if (isValid) {
      const formData = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phone,
        email: email,
        password: password,
      };
      console.log(formData);
      alert("Form submitted successfully!");
    }
  });

function clearErrors() {
  const errorFields = [
    "firstNameError",
    "lastNameError",
    "emailError",
    "phoneError",
    "passwordError",
  ];
  errorFields.forEach(function (id) {
    document.getElementById(id).textContent = "";
  });
}

function displayError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}
