const express = require('express');
const axios = require('axios');
const {
  getCards,
  postCard,
  deleteCard,
} = require('../controllers/cardController');
const cardRouter = express.Router();

//get cards by user id
//自己的api http://localhost/api/cards?id=1
//json提供的api：json http://localhost:3000/cards?id=1   这个可以找到db.json 里 id=1的数据
cardRouter.get('/', getCards);

//post a card to the user
//json server 的api  http://localhost:3000/cards
//自己的api http://localhost/api/cards
cardRouter.post('/', postCard);

//delete a card by card id  ? id = 3
//api http://localhost/api/cards/:card_id    这个card_id 是为了告诉自己时个动态参数
//http://localhost/api/cards/5
cardRouter.delete('/:card_id', deleteCard);

module.exports = cardRouter;
