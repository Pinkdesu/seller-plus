const Router = require('express');

const router = new Router();
const brandController = require('../controllers/brandController');

const checkRole = require('../middleware/checkRoleMiddleware');
const { ROLES } = require('../constants');

router.post('/', checkRole(ROLES.ADMIN), brandController.create);
router.get('/', brandController.getAll);

module.exports = router;
