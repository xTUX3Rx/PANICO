const fs = require("fs");
const path = require("path");
const users = require('./usuarios.json');

exports.handler = async () => {
  try {
    // const usersFile = path.join(__dirname, "usuarios.json");
    // const users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));
    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
