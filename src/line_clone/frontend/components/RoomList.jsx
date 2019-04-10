import * as React from "react"
import RoomItem from './RoomItem'
import { roomItems } from '../data'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Room from "./Room";

export default function ChatRoom() {
  return <>
    {roomItems.map(item => (
      <Link to="/room">
        <RoomItem {...item} key={item.id}/>
      </Link>
    ))}
  </>
}

// export default function RoomList() {
//   return (
//     <Router>
//       <Route exact path="/" component={ChatRoom}/>
//       <Route path="/room" component={Room}/>
//     </Router>
//   )
// }
