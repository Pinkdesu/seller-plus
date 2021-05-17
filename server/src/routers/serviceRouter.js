const Router = require('express');

const router = new Router();
const serviceController = require('../controllers/serviceController');

const checkRole = require('../middleware/checkRoleMiddleware');
const decodeToken = require('../middleware/decodeTokenMiddleware');
const { ROLES } = require('../constants');

router.post('/', [decodeToken, checkRole(ROLES.ADMIN)], serviceController.create);
router.get('/', serviceController.getAll);

module.exports = router;
