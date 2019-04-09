const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('src/line_clone/database/chat.json')
const db = low(adapter)

const lodashId = require('lodash-id')
db._.mixin(lodashId)

const collection = db
  .defaults({messages: []})
  .get('messages')

// roomNameもあるといいかも
db.defaults({messages: []})
  .write()

function readMessages(){
  return db.get('messages').value();
}
module.exports.insertMessage = insertMessage;

function insertMessage(obj) {
  // created_atを追加
  collection
    .insert(obj)
    .write()
}
module.exports.readMessages = readMessages;
