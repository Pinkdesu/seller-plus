const Router = require('express');

const router = new Router();
const brandController = require('../../controllers/user/brandController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/', [decodeToken, checkRole(ROLES.ADMIN)], brandController.create);
router.get('/', brandController.getAll);

module.exports = router;
