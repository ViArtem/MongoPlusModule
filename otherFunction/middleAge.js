// module averade age
const path = require('path')
const {client} = require(path.resolve('mongo.js'))

async function midAge(){
   let a = await client.db().collection('first').find().toArray()
   let all = a.reduce((total, person)=> total + Number(person.age) , 0) /Number(a.length)
   console.log(Math.round(all));
   
}

module.exports={midAge}