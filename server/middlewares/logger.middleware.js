const jwt = require("jsonwebtoken");
require("dotenv").config();

const logger = (req, res, next) => {
  const { authorization } = req.header;
  var user;
  if (authorization) {
    const token = authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    user = decode.uuid;
  }
  console.log("");
  console.log(
    `start-[${new Date()}]-[${req.hostname}]-[${req.ip}]-[${user}]-[${
      req.protocol
    }]-[${req.method}]-[${req.originalUrl}]-end`
  );
  next();
};

module.exports = logger;
