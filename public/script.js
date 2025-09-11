// public/script.js

const form = document.getElementById("login-box");
const responseEl = document.getElementById("response");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

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
  } else {
    responseEl.textContent = "❌ " + data.message;
    responseEl.style.color = "red";
  }
});
