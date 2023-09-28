const express = require('express')
const startup = express.Router()

startup.get('/', (req, res) => {
    res.send('Hello world');
  });

  module.exports = startup;