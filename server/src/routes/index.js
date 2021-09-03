
const authRouter = require('./auth.route');
const userRouter = require('./user.route');
const Router = require('express').Router;
const router = new Router();

router.use('/api/auth', authRouter);
router.use('/api/test', userRouter);

module.exports =  router;
