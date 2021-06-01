const Router = require('express');

const router = new Router();
const userRouter = require('./adminRouter');

router.use('/admin', userRouter);

module.exports = router;
