const Router = require('express');

const router = new Router();
const appThemeController = require('../../controllers/admin/appThemeController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/', [decodeToken, checkRole(ROLES.ADMIN)],
  appThemeController.create);
router.get('/', [decodeToken, checkRole(ROLES.ADMIN)],
  appThemeController.getAll);

module.exports = router;
