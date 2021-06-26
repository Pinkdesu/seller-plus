const Router = require('express');

const router = new Router();
const basketController = require('../../controllers/user/basketController');

const decodeToken = require('../../middleware/decodeTokenMiddleware');

router.get('/', decodeToken, basketController.getBasket);

router.post('/product', decodeToken, basketController.addProduct);

router.delete('/product', decodeToken, basketController.deleteProduct);

router.post('/products', decodeToken, basketController.fillBasket);

module.exports = router;
