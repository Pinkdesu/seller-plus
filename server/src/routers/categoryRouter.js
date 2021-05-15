const Router = require('express');

const router = new Router();
const categoryController = require('../controllers/categoryController');

const checkRole = require('../middleware/checkRoleMiddleware');
const { ROLES } = require('../constants');

router.post('/', checkRole(ROLES.ADMIN), categoryController.create);
router.get('/', categoryController.getAll);
router.delete('/', checkRole(ROLES.ADMIN), categoryController.deleteOne);

module.exports = router;
