"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var MyMessage_1 = require("./MyMessage");
var Message_1 = require("./Message");
var data_1 = require("./data");
function MessageList() {
    var messages = data_1.messageItems.map(function (item) { return <Message_1.default {...item} key={item.time}/>; });
    messages.push(<MyMessage_1.default />);
    return (<>
      {messages}
    </>);
}
exports.default = MessageList;
