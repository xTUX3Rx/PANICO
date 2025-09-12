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
  //alert(`Bienvenido, ${usuario.usuario}!`);
  // Aquí podrías guardar la sesión o redirigir:
  localStorage.setItem('usuarioActivo', JSON.stringify(usuario));
  window.location.href = '../../app/components/home/principal.html';
});


/* 
const loginButton = document.getElementById("loginButton");

// Verifica si hay usuario activo en localStorage
//const usuarioActivo = localStorage.getItem('usuarioActivo');
//if (usuarioActivo) {
 // window.location.href = 'app/components/home/home.component.html';
// }

loginButton.addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch("/.netlify/functions/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
    headers: { "Content-Type": "application/json" }
  });

  const data = await res.json();

  if (data.success) {
    localStorage.setItem("usuarioActivo", JSON.stringify(data.user));
    window.location.href = "app/components/home/home.component.html";
  } else {
    alert("❌ " + data.message);
  }
});

// Validación extra con backend (opcional)
//fetch('/.netlify/functions/getActiveUser')
  //.then(res => res.json())
  //.then(data => {
  //  if (data.user) {
    //  window.location.href = 'app/components/home/home.component.html';
  //  }
 // });
 */