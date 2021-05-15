const jwt = require('jsonwebtoken');

const generateAccessToken = (payload) => jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '24h' });

module.exports = generateAccessToken;
