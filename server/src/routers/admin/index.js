const Router = require('express');

const router = new Router();
const userRouter = require('./adminRouter');
const unitRouter = require('./unitRouter');
const clientRouter = require('./clientRouter');
const productRouter = require('./productRouter');
const clientCategoryRouter = require('./clientCategoryRouter');
const cityDistrictRouter = require('./cityDistrictRouter');
const appThemeRouter = require('./appThemeRouter');
const appStatusRouter = require('./appStatusRouter');

router.use('/', userRouter);
router.use('/unit', unitRouter);
router.use('/client', clientRouter);
router.use('/product', productRouter);
router.use('/client-category', clientCategoryRouter);
router.use('/city-district', cityDistrictRouter);
router.use('/app-theme', appThemeRouter);
router.use('/app-status', appStatusRouter);

module.exports = router;
