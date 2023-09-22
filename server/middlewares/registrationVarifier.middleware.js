require("dotenv").config();
const registrationVarifierJoi = async (req, res, next) => {
  try {
    const { Username, email, password, key } = req.body;
    const emailVaidationRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const UsernameValidation = Username.length >= 3 && Username.length <= 32;
    const passwordValidation = password.length >= 6 && password.length <= 32;
    const emailvalidation = emailVaidationRegex.test(email);
    const keyValidation = key == process.env.KEY;
    if (UsernameValidation && passwordValidation && emailvalidation && keyValidation) {
      res.info = { Username, email, password };
      next();
    } else {
      res.json({
        error:
          "Authentication Faild! In valid information. Please, try again later with some valid information.",
        success: false
      });
      res.end();
    }
  } catch{
    res.json({
      error: "Sorry, there is a server side error . Please, try again later.",
      success: false
    });
    res.end();
  }
};

module.exports = registrationVarifierJoi;
