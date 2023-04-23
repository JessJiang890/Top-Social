const axios = require('axios');

const getRequest = async function (req, res) {
  const url = 'http://localhost:3000/request';
  try {
    const request = await axios.get(url);
    console.log('request', request);
    res.status(200).json({
      msg: 'get request succeed',
      data: {
        request: request.data,
      },
    });
  } catch (error) {
    res.status(500).send('server error');
  }
};

module.exports = { getRequest };
