const Router = require('express');

const router = new Router();
const orderController = require('../../controllers/user/orderController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/', decodeToken, orderController.create);
router.get('/', decodeToken, orderController.getAll);
router.get('/period',
  [decodeToken, checkRole(ROLES.ADMIN)], orderController.getPeriod);

router.get('/:id', decodeToken, orderController.getOne);

module.exports = router;
