const express = require('express');
const axios = require('axios');
const { getMessage } = require('../controllers/messageController');
const messageRouter = express.Router();

//get message
messageRouter.get('/', getMessage);
module.exports = messageRouter;
