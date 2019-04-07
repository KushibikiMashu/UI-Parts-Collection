"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var RoomItem_1 = require("./RoomItem");
var data_1 = require("../data");
function ChatRoomList() {
    var chatRooms = data_1.roomItems.map(function (item) { return <RoomItem_1.default {...item} key={item.roomName}/>; });
    return (<>
      {chatRooms}
    </>);
}
exports.default = ChatRoomList;
