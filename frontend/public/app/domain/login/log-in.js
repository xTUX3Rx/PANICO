(function logIn() {
  on('#loginButton', 'click', function () {
    const username = $('#username').value.toLowerCase().trim();
    const password = $('#password').value;
    const errorMsg = $('#loginError');

    // Oculta mensaje de error por defecto
    errorMsg.style.display = 'none';
    const usuariosGuardados = localStorage.getItem('usuarios');

    if (!usuariosGuardados) {
      errorMsg.textContent = 'No se encontraron usuarios cargados.';
      errorMsg.style.display = 'block';
      return;
    }

    const usuarios = JSON.parse(usuariosGuardados);

    // Busca el usuario
    const usuario = usuarios.find(u => u.username === username);

    if (!usuario || usuario.password !== password) {
      errorMsg.textContent = 'Usuario o contraseña incorrectos';
      errorMsg.style.display = 'block';
      return;
    } else {
      fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" }
      }).then(res => {
        if (res.status === 200) {
          window.location.href = "app/components/home/home.component.html";
        } else {
          console.error("Error en login", data);
        }
      });
    }
  });
})();
