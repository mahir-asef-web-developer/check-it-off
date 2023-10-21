const userSql = require("../models/userConnection.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = (req, res) => {
  try {
    const { email, password } = req.body;
    userSql.query(
      "select * from users.users where email = ?;",
      [email],
      async (err, result) => {
        if(err){
            res.json({
                message: "Authentication faild! Please try again later with valid information.",
                success: false
            });
            res.end()
        }else{
            const dbPassword = result[0].password
            const isAuthenticated = await bcrypt.compare(password, dbPassword);
            const uuid = result[0].ID;
            const Username = result[0].Username;
            if(isAuthenticated){
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
            }
            res.json({
                result: result,
                success:isAuthenticated
            });
            res.end()
        }
      }
    );
  } catch (error) {
    res.json({
      message:
        "Authentication faild! Please try again later with valid information",
      success: false,
    });
    res.end();
  }
};

module.exports = login;
