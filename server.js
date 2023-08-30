const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const express = require("express");
const colors = require("colors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Change this to your frontend's URL
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// DB connection
const connectToDatabase = require("./config/db");
connectToDatabase();

// API routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/chat", require("./routes/chatRoutes"));
app.use("/api/summary", require("./routes/summaryRoutes"));

// Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(
    colors.bgGreen.brightBlue("listening at http://localhost:" + PORT)
  );
});
