const logger = (req, res, next) => {
  console.log("");
  console.log(
    `${req.hostname}-${req.protocol}-${req.method}-${req.originalUrl}`
  );
  next();
};

module.exports = logger;
