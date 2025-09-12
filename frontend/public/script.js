const loginButton = document.getElementById("loginButton");

// Verifica si hay usuario activo en localStorage
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
    localStorage.setItem("usuarioActivo", JSON.stringify(data.user));
    window.location.href = "app/components/home/home.component.html";
  } else {
    alert("❌ " + data.message);
  }
});

// Validación extra con backend (opcional)
fetch('/.netlify/functions/getActiveUser')
  .then(res => res.json())
  .then(data => {
    if (data.user) {
      window.location.href = 'app/components/home/home.component.html';
    }
  });