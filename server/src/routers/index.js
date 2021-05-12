const Router = require('express');

const router = new Router();
const userRouter = require('./userRouter');
const serviceRouter = require('./serviceRouter');
const categoryRouter = require('./categoryRouter');
const productRouter = require('./productRouter');
const brandRouter = require('./brandRouter');

router.use('/user', userRouter);
router.use('/service', serviceRouter);
router.use('/category', categoryRouter);
router.use('/product', productRouter);
router.use('/brand', brandRouter);

module.exports = router;
