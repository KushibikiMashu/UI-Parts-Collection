import React from "react";
import ChatRoomItem from './RoomItem'
import { items } from './data.js'

export default function ChatRoomList() {
  const chatRooms = items.map(item => <ChatRoomItem {...item}/>)

  return (
    <>
      {chatRooms}
    </>
  )
}
