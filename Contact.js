document.getElementById("loginBtn").addEventListener("click", function() {
        window.location.href = "Login.html"; 
});

const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.getElementById("loginBtn").addEventListener("click", function() {
        window.location.href = "Login.html"; 
});
