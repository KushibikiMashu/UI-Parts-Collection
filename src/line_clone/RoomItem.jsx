"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./RoomItem.scss");
function ChatRoomItem(_a) {
    var roomName = _a.roomName, description = _a.description, time = _a.time, newPostCount = _a.newPostCount, img = _a.img;
    return (<div className="RoomItem">
      <div className="RoomItem__Left">
        <img className="RoomItem__Image" src={img} alt="logo"/>
      </div>
      <div className="RoomItem__Center">
        <p>{roomName}</p>
        <p className="RoomItem__Description">{description}</p>
      </div>
      <div className="RoomItem__Right">
        <p className="RoomItem__Time">{time}</p>
        {newPostCount !== "0" && <p className="RoomItem__Badge">{newPostCount}</p>}
      </div>
    </div>);
}
exports.default = ChatRoomItem;
