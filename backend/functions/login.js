console.log("¡Bienvenido/a al programa!");
// backend/functions/login.js
const fs = require("fs");
const path = require("path");
const data = require('./usuarios.json');

exports.handler = async (event, context) => {
  try {
    let body = {};
    if (event.body) {
      body = JSON.parse(event.body);
    }
    const { username, password } = body;

    // Validar usuario
    const user = data.users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return {
        statusCode: 401,
        body: JSON.stringify({ success: false, message: "Credenciales inválidas" }),
      };
    }

    const sessionFilePath = "./activeUser.json";
    const sessionData = {
      ...user,
      loginDate: new Date().toISOString(),
    };

    fs.writeFileSync(sessionFilePath, JSON.stringify(sessionData, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
