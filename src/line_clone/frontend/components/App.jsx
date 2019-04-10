import * as React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Room from "./Room";
import RoomList from "./RoomList";

export default function App() {
  return (
      <div className="Main">
        <Router>
          <Route exact path="/" component={RoomList}/>
          <Route path="/room" component={Room}/>
        </Router>
      </div>
  )
}
