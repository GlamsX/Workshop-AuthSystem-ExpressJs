const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser')

const {
    PORT = 3000,
    NODE_ENV = 'development',
    SESS_LIFE = Hours,
    SESS_SECRET = `ssh!quiet,it\'asecret!`,
    SESS_NAME = 'sid',
} = process.env

const IN_PROD = NODE_ENV === 'production'

const users = [
    { id: 1, name: 'haroun', email: 'haroun@code.fr', password: 'root'},
    { id: 2, name: 'trio', email: 'trio@code.fr', password: 'root'},
    { id: 3, name: 'toto', email: 'toto@code.fr', password: 'root'}
]

const app = express();

const redirectLogin = (req, res, next) => {
    // To do
}

const redirectHome = (req, res, next) => {
    // To do
}

app.use(bodyParser.urlencoded({extended: true}))

app.use(session({
    // To do
}))

app.get('/', (req, res) => {
    const { userId } = req.session;
    res.send(`
        <h1>Welcome!</h1>
        ${userId ? ` 
        <a href='/home'>Home</a>
        <form method='post' action='/logout'>
            <button>Logout</button>
        </form>
        ` : `
        <a href='/login'>Login</a>
        <a href='/register'>register</a>
        `}
    `)
})

app.get('/home', redirectLogin, (req, res) => {
    const user = users.find(user => user.id === req.session.userId)
    res.send (
        `
            <h1>Home</h1>
            <a href='/'>Main</a>
            <ul>
                <li>Name: ${user.name}</li>
                <li>Email: ${user.email}</li>
            </ul>
        `
    )
})

app.get('/login', redirectHome, (req, res) => {
    res.send(
        `
            <h1>Login</h1>
            <form method='post' action='/login'>
                <input type="email" name="email" placeholder="Email" require />
                <input type="password" name="password" placeholder="Password" require />
                <input type="submit" />
            </form>
            <a href='/register'>Register</a>
        `
    )
})

app.post('/login', redirectHome, (req, res) => {
    // To do
})

app.get('/register', redirectHome, (req, res) => {
    res.send(
        `
            <h1>Login</h1>
            <form method='post' action='/register'>
                <input name="name" placeholder="Name" require />
                <input type="email" name="email" placeholder="Email" require />
                <input type="password" name="password" placeholder="Password" require />
                <input type="submit" />
            </form>
            <a href='/login'>Login</a>

        `
    )
})

app.post('/register', redirectHome, (req, res) => {
    // To do
})

app.post('/logout', redirectLogin, (req, res) => {
    // To do
})

app.listen(PORT, () => console.log(
    `http://localhost:${PORT}`
));