const Router = require('express');

const router = new Router();

router.use('/user');
router.use('/service');
router.use('/category');
router.use('/product');
router.use('/brand');

module.exports = router;
