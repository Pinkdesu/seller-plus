const Router = require('express');

const router = new Router();
const clientController = require('../../controllers/admin/clientController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/', [decodeToken, checkRole(ROLES.ADMIN)], clientController.create);
// router.get('/', [decodeToken, checkRole(ROLES.ADMIN)], clientController.getAll);

module.exports = router;
