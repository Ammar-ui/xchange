document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Add your login logic here
    // You can check the username and password, and redirect to the product page if valid.
    // Example: window.location.href = "products.html";
});

document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // Add your forgot password logic here
    // You can send a password reset email, for example.
});
