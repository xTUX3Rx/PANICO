// backend/functions/session.js
const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  const sessionFile = path.join(__dirname, "../session/activeUser.json");

  if (!fs.existsSync(sessionFile)) {
    return {
      statusCode: 200,
      body: JSON.stringify({ active: false }),
    };
  }

  const data = JSON.parse(fs.readFileSync(sessionFile, "utf-8"));
  return {
    statusCode: 200,
    body: JSON.stringify({ active: true, user: data }),
  };
};
