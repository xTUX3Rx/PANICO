// backend/functions/login.js
const fs = require("fs");
const path = require("path");

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { username, password } = body;

    // Ruta a usuarios.json
    const usersFile = path.join(__dirname, "../data/usuarios.json");
    const users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));

    // Validar usuario
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return {
        statusCode: 401,
        body: JSON.stringify({ success: false, message: "Credenciales inválidas" }),
      };
    }

    // Guardar sesión activa
    const sessionFile = path.join(__dirname, "../session/activeUser.json");
    const sessionData = {
      username: user.username,
      loginDate: new Date().toISOString(),
    };
    fs.writeFileSync(sessionFile, JSON.stringify(sessionData, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, user: sessionData }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, message: error.message }),
    };
  }
};
