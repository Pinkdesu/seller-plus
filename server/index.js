require('dotenv').config();

const express = require('express');

const PORT = process.env.PORT || 4000;

const app = express();

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server started on port=${PORT}`));
