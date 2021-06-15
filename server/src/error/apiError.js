const ERROR_CODES = require('./errorCodes');

class ApiError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new ApiError(ERROR_CODES.BAD_REQUEST, message);
  }

  static internal(message) {
    return new ApiError(ERROR_CODES.INTERNAL, message);
  }

  static forbidden(message) {
    return new ApiError(ERROR_CODES.FORBIDDEN, message);
  }

  static unauthorized(message) {
    return new ApiError(ERROR_CODES.UNAUTHORIZED, message);
  }

  static createError(code, message) {
    return new ApiError(code, message);
  }
}

module.exports = ApiError;
