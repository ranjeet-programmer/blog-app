const express = require("express");
const app = express();

const { PORT } = require("./config/serverConfig");

const connectToDatabase = require("./config/database");

const setupAndStart = () => {
  app.listen(PORT, () => {
    console.log(` server is started on port ${PORT} number 300`);

    connectToDatabase();
  });
};

setupAndStart();
