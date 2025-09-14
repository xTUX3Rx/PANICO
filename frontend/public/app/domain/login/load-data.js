(function login() {
  fetch('/.netlify/functions/usuarios') // Debes crear esta función si quieres exponer los usuarios
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('usuario', JSON.stringify(data));
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
})();