const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./database/chat.json')
const db = low(adapter)

// roomNameもあるといいかも
db.defaults({messages: []})
  .write()

db.get('messages')
  .push({test: '投稿されたメッセージ'})
  .write()
