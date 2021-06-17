const Router = require('express');

const router = new Router();
const applicationController = require('../../controllers/admin/applicationController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/', [decodeToken, checkRole(ROLES.ADMIN)],
  applicationController.create);
router.get('/', [decodeToken, checkRole(ROLES.ADMIN)],
  applicationController.getAll);

module.exports = router;
