const ERROR_CODES = require('../error/errorCodes');

module.exports = function checkRoleMiddleware(role) {
  return (req, res, next) => {
    if (req.method === 'OPTIONS') {
      next();
    }

    try {
      if (+req.user.role !== role) {
        res.status(ERROR_CODES.FORBIDDEN).json({ message: 'No access' });
      }

      next();
    }
    catch (e) {
      res.status(ERROR_CODES.FORBIDDEN).json({ message: e.message });
    }
  };
};
