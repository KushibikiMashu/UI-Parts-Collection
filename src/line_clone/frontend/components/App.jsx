import * as React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RoomList from './RoomList'
import Room from './Room'

export default function App() {
  return (
    <Router>
      <div className="Main">
        <Link to="/room"><RoomList/></Link>
        <Route path="/room" component={Room}/>
      </div>
    </Router>
  )
}
