const Router = require('express');

const router = new Router();
const projectController = require('../../controllers/admin/projectController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/', [decodeToken, checkRole(ROLES.ADMIN)],
  projectController.create);
router.get('/', [decodeToken, checkRole(ROLES.ADMIN)],
  projectController.getAll);

module.exports = router;
