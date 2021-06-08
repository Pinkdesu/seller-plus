const Router = require('express');

const router = new Router();
const orderController = require('../../controllers/user/orderController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/',
  [decodeToken, checkRole([ROLES.USER, ROLES.ADMIN])], orderController.create);
router.get('/',
  [decodeToken, checkRole(ROLES.USER)], orderController.getAll);
router.get('/:id',
  [decodeToken, checkRole([ROLES.USER, ROLES.ADMIN])], orderController.getOne);

module.exports = router;
