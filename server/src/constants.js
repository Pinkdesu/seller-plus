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
const CLIENT_BASE_URL = process.env.CLIENT_URL;

const STATIC_FOLDER = 'static';

const PRODUCTS_LIMIT = 16;

const URL = (fileName, routePath = '') => {
  const filePath = routePath ? `${routePath}/${fileName}` : fileName;

  return `${API_BASE_URL}/${filePath}`;
};

module.exports = {
  URL,
  ROLES,
  PASSWORD_VALID,
  PRODUCTS_LIMIT,
  STATIC_FOLDER,
  CLIENT_BASE_URL
};
