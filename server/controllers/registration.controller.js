require("dotenv").config();
const sql = require("../models/userConnection.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const registration = async (req, res) => {
  try {
    const uuid = crypto.randomUUID();
    const { Username, email, password } = res.info;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    sql.query(
      "insert into users.users values( ?, ?, ?, ? );",
      [uuid, Username, email, hashedPassword],
      (err, result) => {
        if (err) {
          res.json({
            error:
              "Authentication Faild! There is something wrong with your information. Please, check your information and try again later.",
            success: false,
          });
          res.end();
        } else {
          res.json({
            success: true,
            result: result,
          });
        }
      }
    );
    jwt.sign(
      {
        uuid: uuid,
        Username: Username,
      },
      process.env.JWT_PRIVATE_KEY,
      {
        expiresIn: "15d",
      }
    );
  } catch {
    res.json({
      error:
        "Authentication Faild! There is something wrong with your information. Please, check your information and try again later.",
      success: false,
    });
    res.end();
  }
};

module.exports = registration;
