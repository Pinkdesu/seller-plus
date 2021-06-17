const Router = require('express');

const router = new Router();
const appStatusController = require('../../controllers/admin/appStatusController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/', [decodeToken, checkRole(ROLES.ADMIN)],
  appStatusController.create);
router.get('/', [decodeToken, checkRole(ROLES.ADMIN)],
  appStatusController.getAll);

module.exports = router;
