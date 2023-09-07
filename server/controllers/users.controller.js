const sql = require("../models/connection.model");

const users = (req, res) => {
  try {
    sql.query("select * from users.users", (error, results) => {
      if (error) {
        console.log(error);
      }
      res.status(200).json(results);
    });
  } catch (err) {
    res.status(500).json({
      message: "No user found"
    });
  }
};

module.exports = users;
