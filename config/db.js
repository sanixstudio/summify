const mongoose = require("mongoose");
const colors = require("colors");

const { DB_URI } = process.env;

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(colors.bgGreen.brightBlue("Connected to MongoDB"));
  } catch (error) {
    console.error(
      colors.bgBlack.brightRed("Error connecting to MongoDB:", error.message)
    );
  }
}

module.exports = connectToDatabase;
