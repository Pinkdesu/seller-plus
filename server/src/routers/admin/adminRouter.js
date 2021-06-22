const Router = require('express');

const router = new Router();
const employeeController = require('../../controllers/admin/adminController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/', [decodeToken, checkRole(ROLES.ADMIN)], employeeController.create);
router.get('/', [decodeToken, checkRole(ROLES.ADMIN)], employeeController.getAll);
router.post('/login', employeeController.login);

module.exports = router;
