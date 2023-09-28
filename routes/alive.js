const express = require('express')
const alive = express.Router()

alive.get('/',(req,res)=>{
    res.send('server is alive')
})

module.exports = alive