const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const JWT_ACCESS_TOKEN = "12cfe9306530dc40a4fe7bb90263429326e1e833e3d1d7e3e6e890327d830e971ceaab651b8019db5dedd57bc636bc725fa8fe97aebd7509ca0c4f8dda0cfcce"
const {
    PORT = 3000,
    NODE_ENV = 'development',
    SESS_LIFE = 2,//h,
    SESS_SECRET = `ssh!quiet,it\'asecret!`,
    SESS_NAME = 'sid',
} = process.env

const IN_PROD = NODE_ENV === 'production'

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

// const dbUrl = ''

// mongoose.connect(dbUrl,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }
// )
// .then(() => console.log('db connection success'))
// .catch(err => console.log(err))

const verify = (req, res, next) => {
    // To do
}

app.get('/', verify, (req, res) => {
    res.send(req.user)
})

app.use(session({
    // To do
}))

app.post('/login', (req, res) => {
    // To do
})

app.post('/register', (req, res) => {
    // To do
})

app.post('/logout', (req, res) => {
    // To do
})

app.listen(PORT, () => console.log(
    `http://localhost:${PORT}`
));