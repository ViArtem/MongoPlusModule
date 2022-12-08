const path = require('path')
const {client} = require(path.resolve('mongo.js'))

async function regist(nam, surnam, age){
    await client.db().collection('first').insertOne({name: nam, surname: surnam, age: age})
}

module.exports={regist}