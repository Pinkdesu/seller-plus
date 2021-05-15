const Router = require('express');

const router = new Router();
const productController = require('../controllers/productController');

const checkRole = require('../middleware/checkRoleMiddleware');
const { ROLES } = require('../constants');

router.post('/', checkRole(ROLES.ADMIN), productController.create);
router.get('/', productController.getAll);
router.get('/:id', productController.getOne);

module.exports = router;
