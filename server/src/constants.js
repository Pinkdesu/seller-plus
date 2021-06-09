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

const URL = (fileName) => `${API_BASE_URL}/${fileName}`;

module.exports = {
  ROLES,
  PASSWORD_VALID,
  URL
};
