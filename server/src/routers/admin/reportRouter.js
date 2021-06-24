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

router.get('/order', [decodeToken, checkRole(ROLES.ADMIN)],
  reportController.getOrderReport);

router.get('/user', [decodeToken, checkRole(ROLES.ADMIN)],
  reportController.getUserReport);

router.get('/average-check', [decodeToken, checkRole(ROLES.ADMIN)],
  reportController.getAverageCheckReport);

router.get('/supply', [decodeToken, checkRole(ROLES.ADMIN)],
  reportController.getSupplyReport);

module.exports = router;
