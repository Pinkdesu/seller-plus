const Router = require('express');

const router = new Router();
const productController = require('../../controllers/admin/productController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/', [decodeToken, checkRole(ROLES.ADMIN)], productController.create);

module.exports = router;
