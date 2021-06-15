const jwt = require('jsonwebtoken');

const generateAccessToken = (payload) => jwt.sign(
  payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '24h' }
);

module.exports = generateAccessToken;
