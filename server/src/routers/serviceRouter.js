const Router = require('express');

const router = new Router();
const serviceController = require('../controllers/serviceController');

const checkRole = require('../middleware/checkRoleMiddleware');
const { ROLES } = require('../constants');

router.post('/', checkRole(ROLES.ADMIN), serviceController.create);
router.get('/', serviceController.getAll);

module.exports = router;
