import * as React from "react"
import RoomItem from './RoomItem'
import { roomItems } from '../data'
import { Link } from "react-router-dom";

export default function RoomList() {
  const allMessage = roomItems.map(item => (
    <Link to="/room">
      <RoomItem {...item} key={item.id}/>
    </Link>
  ))

  return <>
    {allMessage}
  </>
}
