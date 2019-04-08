import * as React from "react"
import RoomItem from './RoomItem'
import {roomItems} from '../data'
import * as BrowserRouter from "react-router-dom";

export default function RoomList(): JSX.Element {
    const chatRooms = roomItems.map(item => <BrowserRouter.Link to="/room"><RoomItem {...item} key={item.roomName}/></BrowserRouter.Link>)

    return (
        <>
            {chatRooms}
        </>
    )
}
