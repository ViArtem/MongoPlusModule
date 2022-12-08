const express = require('express')
const app = express()

const dotev = require('dotenv')
dotev.config()
const PORT = process.env.PORT
const path = require('path')
const {router} = require(path.resolve('router', 'route.js')  ) 
const {client} = require('./mongo.js')
const {run} = require('./mongo.js')

app.use(router)
// Database
run()


app.listen(PORT, ()=>{
            
    console.log(`Server started on port: ${PORT}`);
})







module.exports ={app}




