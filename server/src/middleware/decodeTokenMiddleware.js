const ApiError = require('../error/apiError');
const tokenService = require('../services/tokenService');

// eslint-disable-next-line consistent-return
module.exports = function decodeTokenMiddleware(req, res, next) {
  if (req.method === 'OPTIONS') {
    next();
  }

  try {
    const token = req.headers.authorization.split(' ')[1]; // Bearer token

    if (!token) return next(ApiError.unauthorized('No auth'));
    const userData = tokenService.validateAccessToken(token);

    if (!userData) {
      return next(ApiError.unauthorized('No user data'));
    }

    req.user = userData;
    next();
  }
  catch (e) {
    return next(ApiError.unauthorized(e));
  }
};
