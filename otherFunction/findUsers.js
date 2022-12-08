const path = require('path')
const {client} = require(path.resolve('mongo.js'))

async function getUser(){
    let a = await client.db().collection('first').find().toArray()
    let na = a.map((ind)=> ind.name)
    console.log(na);
}

module.exports = {getUser}