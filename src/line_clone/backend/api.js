const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('src/line_clone/database/chat.json')
const db = low(adapter)

const lodashId = require('lodash-id')
db._.mixin(lodashId)
db._.mixin({
  latest: array => {
    return array[array.length - 1]
  }
})

const collection = db
  .defaults({messages: []})
  .get('messages')

// roomNameもあるといいかも
db.defaults({messages: []})
  .write()

function readMessages() {
  return db.get('messages').value();
}

module.exports.insertMessage = insertMessage;

function insertMessage(obj) {
  obj.created_at = new Date()
  collection
    .insert(obj)
    .write()

  return db.get('messages')
    .latest()
    .value()
}

module.exports.readMessages = readMessages;
