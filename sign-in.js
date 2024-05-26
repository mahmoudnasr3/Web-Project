function toggleForm() {
    document.querySelector('.form-wrapper.sign-in').classList.toggle('active');
    document.querySelector('.form-wrapper.sign-up').classList.toggle('active');
    document.title = document.title === "Sign In" ? "Sign Up" : "Sign In";
}

document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false;
    } else {
        alert("You Can Sign In Now");
        this.submit();
    }
});