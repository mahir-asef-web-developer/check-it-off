const express = require("express");
const usersController = require("../controllers/users.controller");
const registrationController = require("../controllers/registration.controller");
const registrationVarifier = require("../middlewares/registrationVarifier.middleware");
const loginController = require("../controllers/login.controller");
const userRouter = express.Router();

userRouter.get("/", usersController);
userRouter.post("/registration", registrationVarifier, registrationController);
userRouter.post("/login", loginController);

module.exports = userRouter;
