function toggleDetails(id) {
    const details = document.getElementById(id);
    details.classList.toggle("visible");
}
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMessage = document.getElementById("error-message");

    // Clear previous error message
    errorMessage.innerText = "";

    // Check if fields are empty
    if (name === "" || email === "" || message === "") {
        errorMessage.innerText = "All fields are required.";
        return false;
    }

    // Validate email format using regex
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errorMessage.innerText = "Please enter a valid email address.";
        return false;
    }

    // If everything is valid
    alert("Form submitted successfully!");
    return true;
}

