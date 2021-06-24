const Router = require('express');

const router = new Router();
const supplyController = require('../../controllers/admin/supplyController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.get('/period', [decodeToken, checkRole(ROLES.ADMIN)],
  supplyController.getPeriod);

module.exports = router;
