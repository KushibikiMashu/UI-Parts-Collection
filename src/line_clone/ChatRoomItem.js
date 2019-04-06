import React from "react";
import './ChatRoomItem.css'

export default function ChatRoomItem({roomName, description, time, newPostCount, img}) {
  return (
    <>
      <div className="ChatRoom">
        <div className="ChatRoom__Left">
          <img className="ChatRoom__Image" src={img} alt="logo"/>
        </div>
        <div className="ChatRoom__Center">
          <p className="ChatRoom__RoomName">{roomName}</p>
          <p className="ChatRoom__Description">{description}</p>
        </div>
        <div className="ChatRoom__Right">
          <p className="ChatRoom__Time">{time}</p>
          {newPostCount !== "0" && <p className="ChatRoom__Badge">{newPostCount}</p>}
        </div>
      </div>
    </>
  )
}
