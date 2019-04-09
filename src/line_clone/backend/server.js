const express = require('express')
const bodyParser = require('body-parser')
const api = require('./api.js')

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(3005)

// GETでメッセージを取得
app.get('/messages/list', (req, res) => {
  res.send('You got it.')
})


// POSTリクエスト
// curl -X POST -H "Content-Type: application/json" -d '{"userName": "self", "body": "api test", "time": "today"}' 127.0.0.1:3005/messages
app.post('/messages', (req, res) => {
  api.insertMessage(req.body);
  res.send('OK')
})

console.log("Server is working!")