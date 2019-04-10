const express = require('express')
const bodyParser = require('body-parser')
const api = require('./api.js')

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// CORSを許可する
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(3005)

// GETでメッセージを取得
app.get('/messages/list', (req, res) => {
  res.send(api.readMessages())
})

// POSTリクエスト
// curl -X POST -H "Content-Type: application/json" -d '{"userName": "self", "body": "api test", "time": "today"}' 127.0.0.1:3005/messages
app.post('/messages/post', (req, res) => {
  const message = api.insertMessage(req.body);
  // responseで登録したメッセージを返却する（IDつき）
  res.send(message)
})

console.log("Server is working!")