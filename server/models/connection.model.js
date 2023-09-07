require("dotenv").config();
const { createPool } = require("mysql");

const sql = createPool({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: "users",
  connectionLimit: 10,
});

module.exports = sql;