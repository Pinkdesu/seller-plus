const Router = require('express');

const router = new Router();
const categoryController = require('../controllers/categoryController');

const checkRole = require('../middleware/checkRoleMiddleware');
const decodeToken = require('../middleware/decodeTokenMiddleware');
const { ROLES } = require('../constants');

router.post('/', [decodeToken, checkRole(ROLES.ADMIN)], categoryController.create);
router.get('/', categoryController.getAll);
router.delete('/', [decodeToken, checkRole(ROLES.ADMIN)], categoryController.deleteOne);

module.exports = router;
