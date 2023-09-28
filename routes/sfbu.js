const express = require('express')
const sfbu = express.Router()

sfbu.post('/',(req,res)=>{
    const studentName = req.body.studentName;
    res.send({studentName});
  });

  module.exports = sfbu