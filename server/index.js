/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const sequelize = require('./src/database/db');
const models = require('./src/models');

const app = express();

const SERVER_PORT = process.env.SERVER_PORT || 4000;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(SERVER_PORT, () => console.log(`Started on port ${SERVER_PORT}`));
  }
  catch (e) {
    console.log(`Start error: ${e}`);
  }
};

start();
