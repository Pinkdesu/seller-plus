/* eslint-disable no-console */
require('dotenv').config();

const SERVER_PORT = process.env.SERVER_PORT || 4000;

const express = require('express');
const cors = require('cors');
const sequelize = require('./src/database/db');
const models = require('./src/models');
const indexRouter = require('./src/routers');

const errorHandler = require('./src/middleware/errorHandingMiddleware');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', indexRouter);

app.use(errorHandler);

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
