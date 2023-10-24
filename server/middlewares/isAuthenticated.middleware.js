const isAuthenticated = (req, res, next) => {
  try {
    const { authorization } = req.header;
    if (authorization) {
      const token = authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
      if (decode) {
        id = decode.uuid;
        req.id = id;
        next();
      } else {
        res.json({
          authenticated: false,
          success: false,
        });
        res.end();
      }
    }
  } catch {
    res.json({
      message:
        "Authentication faild! Please, try again with valid information.",
      authenticated: false,
      success: false,
    });
    res.end();
  }
};

module.exports = isAuthenticated;
