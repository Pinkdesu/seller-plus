const path = require('path');

const ROLES = {
  VISITOR: 'VISITOR',
  USER: 'USER',
  ADMIN: 'ADMIN'
};

const PASSWORD_VALID = {
  min: 8,
  max: 40
};

const API_BASE_URL = process.env.API_URL;

const STATIC_FOLDER = 'static';

const URL = (fileName, routePath = '') => {
  const filePath = routePath ? `${routePath}/${fileName}` : fileName;

  return `${API_BASE_URL}/${filePath}`;
};

module.exports = {
  ROLES,
  PASSWORD_VALID,
  URL,
  STATIC_FOLDER
};
