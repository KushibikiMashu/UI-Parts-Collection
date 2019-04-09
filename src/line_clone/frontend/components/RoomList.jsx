import * as React from "react"
import RoomItem from './RoomItem'
import { roomItems } from '../data'

export default function RoomList() {
  const chatRooms = roomItems.map(item =>
    <RoomItem {...item} key={item.roomName}/>
  )

  return (
    <>
      {chatRooms}
    </>
  )
}
