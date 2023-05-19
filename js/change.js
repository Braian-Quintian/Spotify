// Obtenemos las referencias a los elementos del DOM
const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');
const loginBox = document.querySelector('.login-box');
const registerBox = document.getElementById('registerBox');

// Agregamos los event listeners a los enlaces
loginLink.addEventListener('click', showLoginForm);
registerLink.addEventListener('click', showRegisterForm);

// Función para mostrar el formulario de inicio de sesión
function showLoginForm(e) {
    e.preventDefault();
    loginBox.style.display = 'block';
    registerBox.style.display = 'none';
}

// Función para mostrar el formulario de registro
function showRegisterForm(e) {
    e.preventDefault();
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
}
