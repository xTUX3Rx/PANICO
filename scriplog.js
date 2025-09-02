 // Valores de login predefinidos
  const validUsername = "admin";
  const validPassword = "1234";

  document.getElementById("loginButton").addEventListener("click", function () {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value.trim();
    const errorMsg = document.getElementById("loginError");

    if (user === validUsername && pass === validPassword) {
     window.location.href = "principal.html"; // Redirige a index.html
} else {
  errorMsg.style.display = "block";
}
  });

  const openModalBtn = document.getElementById("openRegisterModal");
  const closeModalBtn = document.getElementById("closeModal");
  const modal = document.getElementById("modalRegister");
  const overlay = document.getElementById("modalOverlay");

  openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
    overlay.style.display = "block";
  });

  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  });

