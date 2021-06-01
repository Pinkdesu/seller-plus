const Router = require('express');

const router = new Router();
const { check } = require('express-validator');
const userController = require('../../controllers/user/userController');
const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { PASSWORD_VALID } = require('../../constants');
const { ROLES } = require('../../constants');

router.post('/register', [
  check('email', 'INCORRECT_EMAIL').trim().isEmail(),
  check('password', 'INCORRECT_PASSWORD').trim().isLength(PASSWORD_VALID),
  check('repeatPassword', 'INCORRECT_PASSWORD').trim().isLength(PASSWORD_VALID)
], userController.registration);

router.post('/login', userController.login);

router.get('/auth', decodeToken, userController.checkAuth);

router.put('/',
  [decodeToken, checkRole(ROLES.USER, ROLES.ADMIN)], userController.updateUserInfo);

router.put('/password',
  [decodeToken, checkRole(ROLES.USER, ROLES.ADMIN)], userController.changePassword);

module.exports = router;
