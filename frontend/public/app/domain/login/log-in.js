(function logIn() {
  on('#loginButton', 'click', function () {
    const usernameInput = $('#username').value.toLowerCase().trim();
    const passwordInput = $('#password').value;
    const errorMsg = $('#loginError');

    // Oculta mensaje de error por defecto
    errorMsg.style.display = 'none';

    // OJO: Tu clave en localStorage es 'usuario', no 'usuarios'
const usuariosGuardados = localStorage.getItem('usuarios');

if (!usuariosGuardados) {
  errorMsg.textContent = 'No se encontraron usuarios cargados.';
  errorMsg.style.display = 'block';
  return;
}

const usuarios = JSON.parse(usuariosGuardados);

// Busca el usuario
const usuario = usuarios.find(u => u.username === usernameInput);

if (!usuario || usuario.password !== passwordInput) {
  errorMsg.textContent = 'Usuario o contraseña incorrectos';
  errorMsg.style.display = 'block';
  return;
}

// ✅ Login exitoso
localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
window.location.href = 'app/components/home/home.component.html';
  });
})();
