const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const colors = require("colors");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/", (req, res) => {
  res.json("Hi");
});

const connectToDatabase = require("./config/db");
connectToDatabase()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(colors.brightBlue("listening at http://localhost:" + PORT));
});
