const express = require('express')
const trial = express.Router()

trial.get('/',(req,res)=>{
    const id = req.params.id;
    console.log(id);
    res.send(id);
});

module.exports = trial