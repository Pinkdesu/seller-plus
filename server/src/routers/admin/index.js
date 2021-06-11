const Router = require('express');

const router = new Router();
const userRouter = require('./adminRouter');
const unitRouter = require('./unitRouter');
const productRouter = require('./productRouter');

router.use('/', userRouter);
router.use('/unit', unitRouter);
router.use('/product', productRouter);

module.exports = router;
