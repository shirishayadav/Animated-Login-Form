function validateForm() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    
    let valid = true;

    // Username validation
    if (username.value.trim() === "") {
        usernameError.style.display = 'block';
        valid = false;
    } else {
        usernameError.style.display = 'none';
    }

    // Password validation (minimum 6 characters)
    if (password.value.trim().length < 6) {
        passwordError.style.display = 'block';
        valid = false;
    } else {
        passwordError.style.display = 'none';
    }

    return valid;
}