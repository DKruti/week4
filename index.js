const https = require('https');
const express = require('express')
const fs = require('fs')
const app = express()
const port = 8080

const startup = require('./routes/startup')
const alive = require('./routes/alive')
const deviceInfo = require('./routes/getdevice')
const user = require('./routes/user')
const trial = require('./routes/trial')
const sfbu = require('./routes/sfbu')
const ip = require('./routes/getip')

const httpsOptions = {
    key:fs.readFileSync('./key.pem'),
    cert:fs.readFileSync('./cert.pem')
}

const server = https.createServer(httpsOptions,app)

app.use(express.json());
app.use('/',startup)
app.use('/alive',alive)
app.use('/get-device',deviceInfo)
app.use('/getuser',user)
app.use('/trial/:id',trial)
app.use('/sfbu',sfbu)
app.use('/get-ip',ip)


server.listen(port,()=>{
    console.log('server listening on' + port)
})

