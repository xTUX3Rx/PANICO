(function login() {
  fetch('assets/data/usuarios.json')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem('usuario', JSON.stringify(data));
      //de aqui agregue abajo
    // Verificar si hay credenciales guardadas
      const savedUsername = localStorage.getItem('savedUsername');
      const savedPassword = localStorage.getItem('savedPassword');

      if (savedUsername && savedPassword) {
        // Buscar usuario en el JSON cargado
        const userFound = data.find(user =>
          user.username === savedUsername && user.password === savedPassword
        );

        if (userFound) {
          // Redirigir al usuario si las credenciales son válidas
         window.location.href = '../../app/components/home/home.component.html';
        } else {
          // Credenciales inválidas, eliminarlas
          localStorage.removeItem('savedUsername');
          localStorage.removeItem('savedPassword');
        }
      }
      //hasta aca se modifico
    })
    .catch(error => console.error('Error al cargar el JSON:', error));
})();
