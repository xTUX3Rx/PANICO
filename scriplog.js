localStorage.clear();
const usuarios = [
{ usuario: "admin", clave: "1234", telefono: "51929370034" },
{ usuario: "jordanojulca", clave: "yo2025", telefono: "51948581150" },
{ usuario: "samychavez", clave: "123", telefono: "51910269107" },
{ usuario: "piero", clave: "proyecto10", telefono: "51921687047" },
{ usuario: "julieta", clave: "2012", telefono: "51973145507" },
{ usuario: "jesusadriano", clave: "4444", telefono: "51900681492" }
    ];

   document.getElementById("loginButton").addEventListener("click", function () { 
   
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
const errorMsg = document.getElementById("loginError");
      const usuarioValido = usuarios.find(user => user.usuario === username && user.clave === password);

      if (usuarioValido) {
        // Guardar datos en localStorage
        localStorage.setItem("usuario", usuarioValido.usuario);
        localStorage.setItem("telefono", usuarioValido.telefono);

        // Redirigir a la página principal
        window.location.href = "app/components/home/principal.html"; // Redirige
        localStorage.setItem("telefono", usuarioValido.telefono);
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

