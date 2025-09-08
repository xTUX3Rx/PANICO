document.getElementById('loginButton').addEventListener('click', function () {
  const usernameInput = document.getElementById('username').value.trim();
  const passwordInput = document.getElementById('password').value;
  const errorMsg = document.getElementById('loginError');

  // Oculta mensaje de error por defecto
  errorMsg.style.display = 'none';

  // OJO: Tu clave en localStorage es 'usuario', no 'usuarios'
  const usuariosGuardados = localStorage.getItem('usuario');

  if (!usuariosGuardados) {
    errorMsg.textContent = 'No se encontraron usuarios cargados.';
    errorMsg.style.display = 'block';
    return;
  }

  const usuarios = JSON.parse(usuariosGuardados);

  // Busca el usuario
  const usuario = usuarios.find(u => u.usuario === usernameInput);

  if (!usuario || usuario.clave !== passwordInput) {
    errorMsg.textContent = 'Usuario o contraseña incorrectos';
    errorMsg.style.display = 'block';
    return;
  }

  // ✅ Login exitoso
  alert(`Bienvenido, ${usuario.usuario}!`);
  // Aquí podrías guardar la sesión o redirigir:
  //localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
  window.location.href = '../../app/components/home/principal.html';
});

