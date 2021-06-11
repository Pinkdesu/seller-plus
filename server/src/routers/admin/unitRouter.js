const Router = require('express');

const router = new Router();
const unitController = require('../../controllers/admin/unitController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.get('/', [decodeToken, checkRole(ROLES.ADMIN)], unitController.getAll);

module.exports = router;
