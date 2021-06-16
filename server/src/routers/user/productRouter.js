const Router = require('express');

const router = new Router();
const productController = require('../../controllers/user/productController');

router.get('/', productController.getAll);
router.get('/filter', productController.getFilters);
router.get('/search', productController.getSearch);
router.get('/:id', productController.getOne);

module.exports = router;
