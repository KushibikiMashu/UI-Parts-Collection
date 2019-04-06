"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var RoomItem_1 = require("./RoomItem");
var data_1 = require("./data");
function ChatRoomList() {
    var chatRooms = data_1.roomItems.map(function (item) { return <RoomItem_1.default {...item}/>; });
    return (<>
      {chatRooms}
    </>);
}
exports.default = ChatRoomList;
