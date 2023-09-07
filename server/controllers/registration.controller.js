const sql = require("../models/connection.model");

const registration = async (req, res) => {
  try {
    const { Username, email, password, phone } = req.body;
    sql.query(
      "insert into users.users values( uuid(), ?, ?, ?, ? );",
      [Username, email, password, phone],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.json(result);
      }
    );
  } catch{
    res.json({
        message: "Authentication Faild!"
    })
  }
};

module.exports = registration;
