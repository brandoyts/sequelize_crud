require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/v1/users", require("./routes/user"));

module.exports = app;
