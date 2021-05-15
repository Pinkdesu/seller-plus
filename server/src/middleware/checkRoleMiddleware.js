const jwt = require('jsonwebtoken');

module.exports = function checkRoleMiddleware(role) {
  return (req, res, next) => {
    if (req.method === 'OPTIONS') {
      next();
    }

    try {
      const token = req.headers.authorization.split(' ')[1]; // Bearer token

      if (!token) throw new Error();

      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

      if (decodedToken.role !== role) res.status(403).json({ message: 'No access' });

      req.user = decodedToken;
      next();
    }
    catch (e) {
      res.status(401).json({ message: 'No auth' });
    }
  };
};
