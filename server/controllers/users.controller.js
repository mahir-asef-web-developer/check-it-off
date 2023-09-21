const sql = require("../models/userConnection.model");

const users = (req, res) => {
  try{
    sql.query("select * from users.users;", (error, results) => {
      if (error) {
        res.json(error);
      }
      res.json(results);
    });
  } catch (err) {
    res.status(500).json({
      error: "No User Found"
    });
    res.end();
  }
};

module.exports = users;
