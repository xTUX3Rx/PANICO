document.addEventListener('DOMContentLoaded', function () {
  function $(selector) {
    return document.querySelector(selector);
  }

  function on(selector, event, handler) {
    const el = $(selector);
    if (el) el.addEventListener(event, handler);
  }

  (function loginRunning() {
    const usuarios = [
      { usuario: "admin", clave: "1234", telefono: "51929370034" },
      { usuario: "jordanojulca", clave: "yo2025", telefono: "51948581150" },
      { usuario: "samychavez", clave: "123", telefono: "51910269107" },
      { usuario: "piero", clave: "proyecto10", telefono: "51921687047" },
      { usuario: "julieta", clave: "2012", telefono: "51973145507" },
      { usuario: "jesusadriano", clave: "4444", telefono: "51900681492" }
    ];

    const modal = $("#modalRegister");
    const overlay = $("#modalOverlay");

    on("#loginButton", "click", function () {

      const username = $("#username").value;
      const password = $("#password").value;
      const errorMsg = $("#loginError");
      const usuarioValido = usuarios.find(user => user.usuario === username && user.clave === password);

      if (usuarioValido) {
        // Guardar datos en localStorage
        localStorage.setItem("usuario", usuarioValido.usuario);
        localStorage.setItem("telefono", usuarioValido.telefono);

        // Redirigir a la página principal
        window.location.href = "app/components/home/principal.html"; // Redirige

      } else {
        errorMsg.style.display = "block";
      }
    });

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

  })()

});
