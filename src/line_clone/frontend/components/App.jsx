import * as React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RoomList from "./RoomList";
import Room from "./Room";

export default function App() {
  return (
    <div className="Main">
      <Router>
        <Link to="/">Home</Link>
        <Route exact path="/" component={RoomList}/>
        <Route path="/room" component={Room}/>
      </Router>
    </div>
  )
}

