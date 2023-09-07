const express = require('express');
const userRouter = express.Router();
const usersController = require("../controllers/users.controller");
const registrationController = require("../controllers/registration.controller")

userRouter.get("/", usersController);
userRouter.post("/", registrationController);

module.exports = userRouter;