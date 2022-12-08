// module find user bu name
const path = require('path')
const {client} = require(path.resolve('mongo.js'))

async function userF(nam){
    let a = await client.db().collection('first').find({name: nam}).toArray()
    if (a.length == 0) {
        console.log('Такого користувача не існує');
    }else{
        console.log(a);
    }
    
}

module.exports = {userF}