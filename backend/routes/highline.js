const express = require('express');
const { getHighline } = require('../controllers/highlineController');
const highlineRouter = express.Router();

//get highline
//http://localhost/api/highline
// json:server http://localhost:3000/highline
highlineRouter.get('/', getHighline);

module.exports = highlineRouter;
