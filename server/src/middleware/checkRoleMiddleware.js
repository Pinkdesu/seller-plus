/* eslint-disable consistent-return */
const ApiError = require('../error/apiError');

module.exports = function checkRoleMiddleware(...roles) {
  return (req, _, next) => {
    if (req.method === 'OPTIONS') {
      next();
    }

    try {
      const isArray = Array.isArray(roles);

      if (!isArray) {
        return next(ApiError.forbidden('No access'));
      }

      const available = roles.includes(req.user.role);

      if (!available) {
        return next(ApiError.forbidden('No access'));
      }

      next();
    }
    catch (e) {
      return next(ApiError.forbidden(e));
    }
  };
};
