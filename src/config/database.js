const mongoose = require("mongoose");
const { DB_URI } = require("../config/serverConfig");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected to MongoDB cluster ${mongoose.connection.host}:${mongoose.connection.port}`
    );
  } catch (error) {
    console.error(`MongoDB connection error: ${error}`);
  }
};

module.exports = connectToDatabase;
