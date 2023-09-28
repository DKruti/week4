const express = require('express')
const user = express.Router()

user.post('/',(req,res) => {
    const name = req.body.Name
    const loginId = req.body.LoginId
    const sisID = req.body.sisID
    const section = req.body.Section
    const age = req.body.Age

    /* if you  want to return only one object then store all this  
    parameter in one object for example 
    
    var userObj = new Object(); // new object creation 
    userObj.Name = studentName; // pass values to that relavant attribute
    userObj.LoginId = lid;
    res.send({userObj}) //send only one object
  */
    res.send({name,loginId,sisID,section,age})
})

module.exports = user