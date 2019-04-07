import React from "react";
import './RoomItem.css'
import {roomItem as Props} from './Types'

export default function ChatRoomItem({roomName, description, time, newPostCount, img}: Props): JSX.Element {
  return (
    <div className="RoomItem">
      <div className="RoomItem__Left">
        <img className="RoomItem__Image" src={img} alt="logo"/>
      </div>
      <div className="RoomItem__Center">
        <p className="RoomItem__RoomName">{roomName}</p>
        <p className="RoomItem__Description">{description}</p>
      </div>
      <div className="RoomItem__Right">
        <p className="RoomItem__Time">{time}</p>
        {newPostCount !== "0" && <p className="RoomItem__Badge">{newPostCount}</p>}
      </div>
    </div>
  )
}
