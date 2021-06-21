const Router = require('express');

const router = new Router();
const actController = require('../../controllers/admin/actController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/', [decodeToken, checkRole(ROLES.ADMIN)],
  actController.create);
router.get('/', [decodeToken, checkRole(ROLES.ADMIN)],
  actController.getAll);

module.exports = router;
