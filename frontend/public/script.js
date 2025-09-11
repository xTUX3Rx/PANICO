// public/script.js
const loginButton = document.getElementById("loginButton");
const responseEl = document.getElementById("response");

loginButton.addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const res = await fetch("/.netlify/functions/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

  const data = await res.json();

  if (data.success) {
    responseEl.textContent = "✅ " + data.message;
    responseEl.style.color = "green";
    document.getElementById("loginError").style.display = "none";
  } else {
    responseEl.textContent = "❌ " + data.message;
    responseEl.style.color = "red";
    document.getElementById("loginError").style.display = "block";
  }
});