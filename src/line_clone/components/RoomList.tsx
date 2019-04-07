import * as React from "react"
import ChatRoomItem from './RoomItem'
import { roomItems } from '../data'

export default function ChatRoomList(): JSX.Element {
  const chatRooms = roomItems.map(item => <ChatRoomItem {...item} key={item.roomName}/>)

  return (
    <>
      {chatRooms}
    </>
  )
}
