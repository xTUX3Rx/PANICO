const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  try {
    const sessionFile = path.join(__dirname, "../session/activeUser.json");
    if (!fs.existsSync(sessionFile)) {
      return {
        statusCode: 200,
        body: JSON.stringify({ user: null }),
      };
    }
    const user = JSON.parse(fs.readFileSync(sessionFile, "utf-8"));
    return {
      statusCode: 200,
      body: JSON.stringify({ user }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ user: null, message: error.message }),
    };
  }
};