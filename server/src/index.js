require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("../routes/users.routes");

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use("/api/users", userRouter);

app.listen(process.env.PORT, () => {
    console.log(`server is running on http://localhost:${process.env.PORT}`);
});
