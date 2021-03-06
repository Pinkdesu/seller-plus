const Router = require('express');

const router = new Router();
const adminRouter = require('./adminRouter');
const unitRouter = require('./unitRouter');
const clientRouter = require('./clientRouter');
const productRouter = require('./productRouter');
const clientCategoryRouter = require('./clientCategoryRouter');
const cityDistrictRouter = require('./cityDistrictRouter');
const appThemeRouter = require('./appThemeRouter');
const appStatusRouter = require('./appStatusRouter');
const positionRouter = require('./positionRouter');
const applicationRouter = require('./applicationRouter');
const projectRouter = require('./projectRouter');
const actRouter = require('./actRouter');
const permissionRouter = require('./permissionRouter');
const reportRouter = require('./reportRouter');
const invoiceRouter = require('./invoiceRouter');

router.use('/', adminRouter);
router.use('/unit', unitRouter);
router.use('/client', clientRouter);
router.use('/product', productRouter);
router.use('/client-category', clientCategoryRouter);
router.use('/city-district', cityDistrictRouter);
router.use('/app-theme', appThemeRouter);
router.use('/app-status', appStatusRouter);
router.use('/position', positionRouter);
router.use('/application', applicationRouter);
router.use('/project', projectRouter);
router.use('/act', actRouter);
router.use('/permission', permissionRouter);
router.use('/report', reportRouter);
router.use('/invoice', invoiceRouter);

module.exports = router;
