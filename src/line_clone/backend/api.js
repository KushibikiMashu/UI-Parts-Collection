const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('src/line_clone/database/chat.json')
const db = low(adapter)

// roomNameもあるといいかも
db.defaults({messages: []})
  .write()

function insertMessage(obj) {
  db.get('messages')
    .push(obj)
    .write()
}

module.exports.insertMessage = insertMessage;
