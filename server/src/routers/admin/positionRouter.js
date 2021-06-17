const Router = require('express');

const router = new Router();
const positionController = require('../../controllers/admin/positionController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/', [decodeToken, checkRole(ROLES.ADMIN)],
  positionController.create);

module.exports = router;
