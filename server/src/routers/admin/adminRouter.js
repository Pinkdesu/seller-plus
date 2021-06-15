const Router = require('express');

const router = new Router();
const employeeController = require('../../controllers/admin/adminController');

router.post('/login', employeeController.login);

module.exports = router;
