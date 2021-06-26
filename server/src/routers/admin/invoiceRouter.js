const Router = require('express');

const router = new Router();
const invoiceController = require('../../controllers/admin/invoiceController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/',
  [decodeToken, checkRole(ROLES.ADMIN)], invoiceController.create);
router.get('/period',
  [decodeToken, checkRole(ROLES.ADMIN)], invoiceController.getPeriod);
// router.get('/',
//  [decodeToken, checkRole(ROLES.ADMIN)], invoiceController.getAll);

module.exports = router;
