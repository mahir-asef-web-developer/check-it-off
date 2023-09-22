const sql = require("../models/userConnection.model");
require("dotenv").config();

const users = (req, res) => {
  try {
    if (req.body.key == process.env.KEY) {
      sql.query("select * from users.users;", (error, results) => {
        if (error) {
          res.json({
            error: error,
            success: false,
          });
          res.end();
        } else {
          res.json({
            result: results,
            success: true,
          });
        }
      });
    } else {
      res.json({
        error: "You aren't authenticated",
        success: false,
      });
    }
  } catch (err) {
    res.status(500).json({
      error: "No User Found",
      success: false,
    });
    res.end();
  }
};

module.exports = users;
