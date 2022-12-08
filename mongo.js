const {MongoClient}= require('mongodb')
const path = require('node:path')

 

const dotev = require('dotenv')
dotev.config()

const url = process.env.URL


const client = new MongoClient(url)

//Connecting to the database
async function run(){
    try {
        await client.connect()
        console.log('Contact');
        let user = client.db()
        let m = await user.listCollections().toArray()
        if(m[0].name != 'first')
        client.db().createCollection('first')
      
    } catch (e) {
        console.log(e);
 
    }
}


module.exports ={run, client}
