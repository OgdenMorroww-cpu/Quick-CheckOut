require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/Route");
const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const dataBase = mongoose.connection;

dataBase.on("error", (error) => {
  console.log(error);
});

dataBase.once("connected", () => {
  console.log("DataBase Connected");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);

app.listen(3000, () => {
  console.log("Server started on port: 3000");
});
