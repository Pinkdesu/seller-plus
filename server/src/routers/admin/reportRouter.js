const Router = require('express');

const router = new Router();
const reportController = require('../../controllers/admin/reportController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.get('/employee', [decodeToken, checkRole(ROLES.ADMIN)],
  reportController.getEmployeeReport);

router.get('/client', [decodeToken, checkRole(ROLES.ADMIN)],
  reportController.getClientReport);

router.get('/product', [decodeToken, checkRole(ROLES.ADMIN)],
  reportController.getProductReport);

router.get('/district', [decodeToken, checkRole(ROLES.ADMIN)],
  reportController.getDistrictReport);

router.get('/app-count', [decodeToken, checkRole(ROLES.ADMIN)],
  reportController.getAppCountReport);

module.exports = router;
