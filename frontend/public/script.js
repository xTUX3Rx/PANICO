const loginButton = document.getElementById("loginButton");

// Usar siempre la misma clave
const usuarioActivo = localStorage.getItem('usuarioActivo');
if (usuarioActivo) {
  window.location.href = 'app/components/home/home.component.html';
}

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
    // Guardar con la misma clave
    localStorage.setItem("usuarioActivo", JSON.stringify(data.user));
    window.location.href = "app/components/home/home.component.html";
  } else {
    alert("❌ " + data.message);
  }
});

fetch('/.netlify/functions/getActiveUser')
  .then(res => res.json())
  .then(data => {
    if (data.user) {
      // Usuario activo, redirige al home
      window.location.href = 'app/components/home/home.component.html';
    }
  });