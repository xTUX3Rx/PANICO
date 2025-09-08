 
    const usuarios = [
      { usuario: "admin", clave: "1234", telefono: "123456789" },
      { usuario: "juan", clave: "abcd", telefono: "987654321" },
      { usuario: "ana", clave: "pass1", telefono: "555123456" },
      { usuario: "carlos", clave: "clave", telefono: "111222333" },
      { usuario: "lucia", clave: "lucia2025", telefono: "444555666" }
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

