const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.listen(3005)

// GETでメッセージを取得
app.get('/messages/list', (req, res) => {

  const json = JSON.stringify({
    userName: "self",
    body: "Creating clone app of LINE.",
    time: "午後 15:00",
    image: null,

  })
  res.send(json)
})


app.post('/messages', (req, res) => {
  res.send('Hello World')
})

console.log("Server is working!")