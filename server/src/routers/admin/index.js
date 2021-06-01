const Router = require('express');

const router = new Router();
const userRouter = require('./adminRouter');

router.use('/', userRouter);

module.exports = router;
