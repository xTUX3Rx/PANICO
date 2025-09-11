// backend/functions/logout.js
const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  const sessionFile = path.join(__dirname, "../session/activeUser.json");

  if (fs.existsSync(sessionFile)) {
    fs.unlinkSync(sessionFile);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, message: "Sesión cerrada" }),
  };
};
