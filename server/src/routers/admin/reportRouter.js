const Router = require('express');

const router = new Router();
const reportController = require('../../controllers/admin/reportController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.get('/employee', [decodeToken, checkRole(ROLES.ADMIN)],
  reportController.getEmployeeReport);

module.exports = router;
