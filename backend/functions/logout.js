const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  const sessionFile = path.join(__dirname, "./activeUser.json");

  fs.writeFileSync(sessionFile, JSON.stringify({}));

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true, message: "Sesión cerrada" }),
  };
};
