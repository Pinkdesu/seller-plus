const Router = require('express');

const router = new Router();
const { check } = require('express-validator');
const userController = require('../controllers/userController');
const auth = require('../middleware/authMiddleware');

router.post('/register', [
  check('email', 'INCORRECT_EMAIL').normalizeEmail().isEmail(),
  check('password', 'INCORRECT_PASSWORD').trim().isLength({ min: 8, max: 40 })
], userController.registration);
router.post('/login', userController.login);

router.get('/auth', auth, userController.checkAuth);

module.exports = router;
