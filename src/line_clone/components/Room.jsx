"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./Room.scss");
var MessageList_1 = require("./MessageList");
var InputField_1 = require("./InputField");
var react_1 = require("react");
var Reducer_1 = require("../Reducer");
var Context_1 = require("../Context");
function Room() {
    var _a = react_1.useReducer(Reducer_1.Reducer, { messages: [] }), state = _a[0], dispatch = _a[1];
    return (<Context_1.MessageContext.Provider value={{ state: state, dispatch: dispatch }}>
            <MessageList_1.default />
            <InputField_1.default />
        </Context_1.MessageContext.Provider>);
}
exports.default = Room;
