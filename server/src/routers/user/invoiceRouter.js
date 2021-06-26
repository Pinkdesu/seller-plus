const Router = require('express');

const router = new Router();
const invoiceController = require('../../controllers/user/invoiceController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/',
  [decodeToken, checkRole(ROLES.ADMIN)], invoiceController.create);
// router.get('/',
//  [decodeToken, checkRole(ROLES.ADMIN)], invoiceController.getAll);

module.exports = router;
