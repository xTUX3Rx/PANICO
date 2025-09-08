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

