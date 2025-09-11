const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch("/.netlify/functions/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();

  if (data.success) {
    localStorage.setItem("activeUser", JSON.stringify(data.user));
    window.location.href = "./app/home/home.component.html";
  } else {
    alert("❌ " + data.message);
  }
});

// Al cargar index.html, verificar si ya hay sesión
window.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("/.netlify/functions/session");
  const data = await res.json();

  if (data.active) {
    window.location.href = "./app/home/home.component.html";
  }
});
