const express = require("express");
const usersController = require("../controllers/users.controller");
const registrationController = require("../controllers/registration.controller");
const registrationVarifier = require("../middlewares/registrationVarifier.middleware");
const userRouter = express.Router();

userRouter.get("/", usersController);
userRouter.post("/", registrationVarifier, registrationController);

module.exports = userRouter;
