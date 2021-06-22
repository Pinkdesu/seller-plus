const Router = require('express');

const router = new Router();
const originCountryController = require('../../controllers/admin/originCountryController');

const checkRole = require('../../middleware/checkRoleMiddleware');
const decodeToken = require('../../middleware/decodeTokenMiddleware');
const { ROLES } = require('../../constants');

router.get('/', [decodeToken, checkRole(ROLES.ADMIN)],
  originCountryController.getAll);
router.post('/', [decodeToken, checkRole(ROLES.ADMIN)],
  originCountryController.create);

module.exports = router;
