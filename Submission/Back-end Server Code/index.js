const express = require('express')
const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password: "0lbIY07suanSjszbHrDR",
    host: "containers-us-west-85.railway.app",
    port: 6943,
    database: "railway"
})
const app = express()
app.use(express.json())
const port = process.env.PORT || 8080
const Version = 'V1'
app.listen(port, () => {
    console.log(`Rest API listening on port ${port}`)
})
app.set('trust proxy', true)

//Initialise
client.connect()
.then(() => console.log('Connected successfuly'))
.catch(console.error)

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.append('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

//API Endpoints
app.post('/signin', async (req, res) => {
    const email = req.body.email

    client.query(`SELECT * FROM userdata where email = '${email}'`)
    .then(results => {
        const password = req.body.password
        console.log(req.body)
        console.table(results.rows)
        if (results.rows[0] && password == results.rows[0].password) {
            return res.status(200).json(results.rows)
        }
        res.status(403).json('Access Denied!')
    })
    .catch(console.error)
})

app.post('/signup', async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    console.log(req.body)

    client.query(`SELECT * FROM userdata where email = '${email}'`)
    .then(results => {
        if (results.rows[0]) {
            return res.status(403).json('Already Exists!')
        }
        client.query(`INSERT INTO userdata (name, email, password) VALUES ('${name}', '${email}', '${password}')`)
        .then(results => {
            console.log(`Successfully created user for ${email}`)
            res.status(200).json('Success!')
        })
        .catch(console.error)
    })
    .catch(console.error)
})

app.post('/purchase', async (req, res) => {
    const email = req.body.email
    const product = req.body.product
    console.log(req.body)

    client.query(`INSERT INTO purchases (email, product) VALUES ('${email}', '${product}')`)
    .then(results => {
        console.log(`Successfully logged purchase for ${email}`)
        res.status(200).json('Success!')
    })
    .catch(console.error)
})

app.post('/purchases', async(req, res) => {
    const email = req.body.email

    client.query(`SELECT * FROM purchases where email = '${email}'`)
    .then(results => {
        console.table(results.rows)
        if (results.rows[0]) {
            return res.status(200).json(results.rows)
        }
        res.status(404).json('Not Found!')
    })
    .catch(console.error)
})