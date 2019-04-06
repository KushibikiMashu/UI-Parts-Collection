import React from "react";
import ChatRoomItem from './RoomItem'
import { roomItems } from './data.js'

export default function ChatRoomList() {
  const chatRooms = roomItems.map(item => <ChatRoomItem {...item}/>)

  return (
    <>
      {chatRooms}
    </>
  )
}
