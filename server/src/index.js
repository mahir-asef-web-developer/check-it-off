require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("../routes/users.routes");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api/users", userRouter);

app.listen(process.env.PORT, () => {
    console.log(`server is running on http://localhost:${process.env.PORT}`);
});
