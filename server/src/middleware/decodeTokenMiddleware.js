const jwt = require('jsonwebtoken');
const ERROR_CODES = require('../error/errorCodes');

module.exports = function decodeTokenMiddleware(req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1]; // Bearer token

    if (!token) res.status(ERROR_CODES.UNAUTHORIZED).json({ message: 'No auth' });

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decodedToken;
    next();
  }
  catch (e) {
    res.status(ERROR_CODES.UNAUTHORIZED).json({ message: e.message });
  }
};
