require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("../routes/users.routes");
const taskRouter = require("../routes/tasks.routes");
const logger = require("../middlewares/logger.middleware");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger);
app.use("/api/users", userRouter);
app.use("/api/tasks", taskRouter);

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
