const express = require('express')
const ip = express.Router()

ip.get('/',(req,res)=>{
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.send({userIp});
  })

  module.exports=ip