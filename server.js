const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const errorHandler = require("./middleware/errorMiddleware");

const app = express();
dotenv.config();

// route path
const authRoutes = require("./routes/authRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(errorHandler);

// DB connection
const connectToDatabase = require("./config/db");
connectToDatabase();

// API routes
app.use("/api/v1/auth", authRoutes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(
    colors.bgGreen.brightBlue("listening at http://localhost:" + PORT)
  );
});
