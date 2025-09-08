(function logIn() {
  const usuarios = JSON.parse(localStorage.getItem('usuarios'));
  const usuarioBuscado = 'jordanojulca';

  const usuario = usuarios.find(u => u.usuario === usuarioBuscado);

  console.log(usuario);
})()