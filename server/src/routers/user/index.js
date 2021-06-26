const Router = require('express');

const router = new Router();
const userRouter = require('./userRouter');
const serviceRouter = require('./serviceRouter');
const categoryRouter = require('./categoryRouter');
const productRouter = require('./productRouter');
const brandRouter = require('./brandRouter');
const basketRouter = require('./basketRouter');
const orderRouter = require('./orderRouter');

router.use('/user', userRouter);
router.use('/service', serviceRouter);
router.use('/category', categoryRouter);
router.use('/product', productRouter);
router.use('/brand', brandRouter);
router.use('/basket', basketRouter);
router.use('/order', orderRouter);

module.exports = router;
