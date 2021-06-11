const Router = require('express');

const router = new Router();
const userRouter = require('./adminRouter');
const unitRouter = require('./unitRouter');

router.use('/', userRouter);
router.use('/unit', unitRouter);

module.exports = router;
