const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(3005)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/', (req, res) => {
  res.send('Hello World')
})

console.log("Server is working!")