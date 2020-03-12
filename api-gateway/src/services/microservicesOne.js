const axios = require('axios');

const ms1 = axios.create({
  baseURL: 'http://localhost:3003',
});

module.exports = { ms1 }