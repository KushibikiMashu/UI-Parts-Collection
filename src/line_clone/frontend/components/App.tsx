import * as React from 'react'
import './App.scss'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import RoomList from './RoomList'
import Room from './Room'

export default function App(): JSX.Element {
    return (
        <Router>
            <div className="Main">
                <ul>
                    <li>
                        <Link to="/">list</Link>
                    </li>
                    <li>
                        <Link to="/room">room</Link>
                    </li>
                </ul>
                <Route path="/" component={RoomList}/>
                <Route path="/room" component={Room}/>
            </div>
        </Router>
    )
}
