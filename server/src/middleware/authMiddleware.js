const jwt = require('jsonwebtoken');

module.exports = function authMiddleware(req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1]; // Bearer token

    if (!token) throw new Error();

    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decodedToken;
    next();
  }
  catch (e) {
    res.status(401).json({ message: 'No auth' });
  }
};
