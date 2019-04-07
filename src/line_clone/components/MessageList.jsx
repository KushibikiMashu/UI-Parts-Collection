"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var MyMessage_1 = require("./MyMessage");
var OtherMessage_1 = require("./OtherMessage");
var data_1 = require("../data");
var react_1 = require("react");
var Context_1 = require("../Context");
function MessageList() {
    var state = react_1.useContext(Context_1.MessageContext).state;
    var allMessages = data_1.messageItems.concat(state.messages).map(function (item) {
        return item.userName === 'self' ?
            <MyMessage_1.default {...item} key={item.body}/> :
            <OtherMessage_1.default {...item} key={item.body}/>;
    });
    return (<>
            {allMessages}
        </>);
}
exports.default = MessageList;
