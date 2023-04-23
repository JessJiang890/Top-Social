const express = require('express');
const { getRequest } = require('../controllers/requestController');
const requestRouter = express.Router();

//get request
requestRouter.get('/', getRequest);

module.exports = requestRouter;
