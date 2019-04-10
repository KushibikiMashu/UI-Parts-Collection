import * as React from 'react'
import './App.scss'
import ChatRoom from "./RoomList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Room from "./Room";

export default function App() {
  return (
    <div className="Main">
      <Router>
        <Link to="/">Home</Link>
        <Route exact path="/" component={ChatRoom}/>
        <Route path="/room" component={Room}/>
      </Router>
    </div>
  )
}
