const Router = require('express');

const router = new Router();
const clientCategoryController = require('../../controllers/admin/clientCategoryController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/', [decodeToken, checkRole(ROLES.ADMIN)],
  clientCategoryController.create);
router.get('/', [decodeToken, checkRole(ROLES.ADMIN)],
  clientCategoryController.getAll);

module.exports = router;
