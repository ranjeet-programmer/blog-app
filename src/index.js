const express = require("express");

const bodyParser = require("body-parser");
const app = express();

const { PORT } = require("./config/serverConfig");

const connectToDatabase = require("./config/database");

const apiRoutes = require("./routes/index");

const setupAndStart = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(` server is started on port ${PORT} number 300`);

    connectToDatabase();
  });
};

setupAndStart();
