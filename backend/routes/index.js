const express = require('express');
const highlineRouter = require('./highline');
const cardRouter = require('./cards');
const messageRouter = require('./message');
const profileRouter = require('./profile');
const requestRouter = require('./request');
//创建路由模块
const router = express.Router();
router.use('/highline', highlineRouter);
router.use('/cards', cardRouter);
router.use('/message', messageRouter);
router.use('/profile', profileRouter);
router.use('/request', requestRouter);

module.exports = router;
