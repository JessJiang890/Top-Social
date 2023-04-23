const axios = require('axios');

const getMessage = async function (req, res) {
  const url = 'http://localhost:3000/message';
  try {
    const message = await axios.get(url);
    console.log('message', message);
    res.status(200).json({
      msg: 'get message succeed',
      data: {
        message: message.data,
      },
    });
  } catch (error) {
    res.status(500).send('server error');
  }
};

module.exports = { getMessage };
