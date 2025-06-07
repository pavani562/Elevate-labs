document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Clear previous messages
    document.getElementById('nameError').textContent = "";
    document.getElementById('emailError').textContent = "";
    document.getElementById('messageError').textContent = "";
    document.getElementById('successMessage').textContent = "";
  
    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    let isValid = true;
  
    // Name Validation
    if (name === "") {
      document.getElementById('nameError').textContent = "Name is required.";
      isValid = false;
    }
  
    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      document.getElementById('emailError').textContent = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      document.getElementById('emailError').textContent = "Enter a valid email address.";
      isValid = false;
    }
  
    // Message Validation
    if (message === "") {
      document.getElementById('messageError').textContent = "Message cannot be empty.";
      isValid = false;
    }
  
    // If valid, show success message
    if (isValid) {
      document.getElementById('successMessage').textContent = "Form submitted successfully!";
      document.getElementById('contactForm').reset();
    }
  });
  