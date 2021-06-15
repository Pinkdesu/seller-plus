const Router = require('express');

const router = new Router();
const basketController = require('../../controllers/user/basketController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.get('/', [decodeToken, checkRole(ROLES.USER)],
  basketController.getBasket);

router.post('/product', [decodeToken, checkRole(ROLES.USER)],
  basketController.addProduct);

router.delete('/product', [decodeToken, checkRole(ROLES.USER)],
  basketController.deleteProduct);

router.post('/products', [decodeToken, checkRole(ROLES.USER)],
  basketController.fillBasket);

module.exports = router;
