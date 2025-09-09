(function register() {
  const modal = $("#modalRegister");
  const overlay = $("#modalOverlay");

  on("#openRegisterModal", "click", () => {
    modal.style.display = "block";
    overlay.style.display = "block";
  });

  on("#closeModal", "click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  });

  on("#modalOverlay", "click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  });
})();
