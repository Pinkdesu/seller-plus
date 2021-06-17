const Router = require('express');

const router = new Router();
const cityDistrictController = require('../../controllers/admin/cityDistrictController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.post('/', [decodeToken, checkRole(ROLES.ADMIN)],
  cityDistrictController.create);
router.get('/', [decodeToken, checkRole(ROLES.ADMIN)],
  cityDistrictController.getAll);

module.exports = router;
