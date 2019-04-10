import * as React from "react"
import RoomItem from './RoomItem'
import { roomItems } from '../data'
import { BrowserRouter as Link } from "react-router-dom";

export default function RoomList() {
  return <>
    {roomItems.map(item => (
      <Link to="/room">
        <RoomItem {...item} key={item.id}/>
      </Link>
    ))}
    </>
}
