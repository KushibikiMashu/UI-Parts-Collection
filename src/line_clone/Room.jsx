"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./Room.scss");
var MessageList_1 = require("./MessageList");
var InputField_1 = require("./InputField");
function Room() {
    return (<>
            <MessageList_1.default />
            <InputField_1.default />
        </>);
}
exports.default = Room;
