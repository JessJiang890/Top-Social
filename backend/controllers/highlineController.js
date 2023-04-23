const axios = require('axios');

const getHighline = async function (req, res) {
  const url = 'http://localhost:3000/highline';

  try {
    const highline = await axios.get(url);
    console.log('highline', highline);
    res.status(200).json({
      msg: 'get highline succeed',
      data: highline.data,
    });
  } catch (error) {
    res.status(500).send('server error');
  }
};

module.exports = { getHighline };
