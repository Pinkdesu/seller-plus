const ERROR_CODES = require('../error/errorCodes');

module.exports = function checkRoleMiddleware(...roles) {
  return (req, res, next) => {
    if (req.method === 'OPTIONS') {
      next();
    }

    try {
      const isArray = Array.isArray(roles);

      if (!isArray) {
        res.status(ERROR_CODES.FORBIDDEN).json({ message: 'No access' });
      }

      const available = roles.includes(req.user.role);

      if (!available) {
        res.status(ERROR_CODES.FORBIDDEN).json({ message: 'No access' });
      }

      next();
    }
    catch (e) {
      res.status(ERROR_CODES.FORBIDDEN).json({ message: e.message });
    }
  };
};
