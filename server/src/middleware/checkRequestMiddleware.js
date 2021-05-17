const ERROR_CODES = require('../error/errorCodes');

module.exports = function checkRoleMiddleware(role, param) {
  return (req, res, next) => {
    if (req.method === 'OPTIONS') {
      next();
    }

    try {
      const { body, user } = req;
      const { role: userRole } = user;

      if (body?.[param] && userRole !== role) {
        res.status(ERROR_CODES.UNAUTHORIZED).json({ message: 'No access' });
      }

      next();
    }
    catch (e) {
      res.status(ERROR_CODES.FORBIDDEN).json({ message: e.message });
    }
  };
};
