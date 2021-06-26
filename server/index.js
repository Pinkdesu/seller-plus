/* eslint-disable no-console */
require('dotenv').config();
require('./src/models');

const SERVER_PORT = process.env.SERVER_PORT || 4000;

const express = require('express');
const cors = require('cors');
const path = require('path');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const { CLIENT_BASE_URL } = require('./src/constants');
const sequelize = require('./src/database/db');
const indexRouter = require('./src/routers');

const errorHandler = require('./src/middleware/errorHandingMiddleware');

const app = express();

app.use(cors({ credentials: true, origin: CLIENT_BASE_URL }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));

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
