const express=require('express')
const deviceInfo = express.Router()

deviceInfo.get('/',(req,res)=>{
    const whatDeviceIsThis = req.header('User-Agent');
    let isWindows = false
    let isMac = false
    let isLinux = false
    let postmanRunTime = false

    if (whatDeviceIsThis.includes('Windows')){
        isWindows = true
    }
    else if(whatDeviceIsThis.includes('Macintosh')){
        isMac = true
    }
    else if(whatDeviceIsThis.includes('Linux')){
        isLinux = true
    }
    else if (whatDeviceIsThis.includes('postmanRuntime')){
        postmanRuntime = true
    }
     res.send({isWindows,isMac, isLinux, postmanRunTime})
     //res.send({whatDeviceIsThis})
})

module.exports = deviceInfo