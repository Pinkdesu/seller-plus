const Router = require('express');

const router = new Router();
const permissionController = require('../../controllers/admin/permissionController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/', [decodeToken, checkRole(ROLES.ADMIN)],
  permissionController.create);
router.get('/', [decodeToken, checkRole(ROLES.ADMIN)],
  permissionController.getAll);

module.exports = router;
