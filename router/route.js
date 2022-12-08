const {Router}= require('express')
const path = require('path')

//A module that registers users
const {regist} = require(path.resolve('otherFunction','regist.js'))

//A module that calculates the average age
const {midAge} = require(path.resolve('otherFunction','middleAge.js'))

//A module that finds all users
const {getUser} = require(path.resolve('otherFunction','findUsers.js'))

//A module that finds user by name
const {userF} = require(path.resolve('otherFunction','findNameuser.js'))



let bodyParser = require('body-parser')
let urlencodedParser = bodyParser.urlencoded({ extended: false })


const router = Router()

router.get('/', (req, res)=>{
    res.sendFile(path.resolve('index.html'))
   
})

//registers users
router.post('/registration', urlencodedParser,(req, res)=>{
    const name = req.body.name
    const surname = req.body.surname
    const age = req.body.age
    regist(name, surname, age)
    console.log('user reg');
    res.redirect('/')
})

//average age
router.post('/age', urlencodedParser,(req, res)=>{
    midAge()
    res.redirect('/')
})

//finds all users
router.post('/nameuser', urlencodedParser,(req, res)=>{
    getUser()
    res.redirect('/')
})

//finds user by name
router.post('/findbynameuser', urlencodedParser, (req, res)=>{
    userF(req.body.findbynameuser)
    res.redirect('/')
})

module.exports = {router}