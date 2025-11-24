document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    emailError.textContent = '';
    passwordError.textContent ='';

    let isValid = true;

    if (email === '') {
        emailError.textContent = 'E-mail is required.';
        isValid = false;
    }

    if (password === '') {
        passwordError.textContent = '*Password is required.';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = '*Password should contain atleast 6 characters.';
        isValid = false;
    } else if (password.length > 8) {
        passwordError.textContent = '*Password cannot be more than 8 characters long.';
        isValid = false
    } else if (!/[A-Z]/.test(password)) {
        passwordError.textContent = '*Password should contain atleast one uppercase letter.';
        isValid = false;
    } else if (!/[a-z]/.test(password)) {
        passwordError.textContent = '*Password should contain atleast one lowercase letter.';
        isValid = false;
    } else if (!/[0-9]/.test(password)) {
        passwordError.textContent = '*Password should contain atleast one digit.';
        isValid = false;
    } else if (/\s/.test(password)) {
        passwordError.textContent = '*Password cannot contain spaces.';
        isValid = false;
    }

    if (isValid) {
        alert('You have logged in successfully.');
    }
});

const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
