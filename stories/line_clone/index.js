import * as React from "react"
import { storiesOf } from "@storybook/react"

import App from '../../src/line_clone/frontend/components/App'
import Room from '../../src/line_clone/frontend/components/Room'
import RoomList from '../../src/line_clone/frontend/components/RoomList'
import RoomItem from '../../src/line_clone/frontend/components/RoomItem'
import MessageList from '../../src/line_clone/frontend/components/MessageList'
import MyMessage from '../../src/line_clone/frontend/components/MyMessage'
import Message from '../../src/line_clone/frontend/components/OtherMessage'
import InputField from '../../src/line_clone/frontend/components/InputField'

import { roomItems, messageItems } from '../../src/line_clone/frontend/data'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

storiesOf('LINE CLONE', module)
  .add('App', () => <App/>)
  .add('Room', () => <Room/>)
  .add('RoomList', () => <RoomList/>)
  .add('RoomItem', () => <RoomItem {...roomItems[0]}/>)
  .add('MessageList', () => 'Error because of no useContext initialization')
  .add('MyMessage', () => <MyMessage {...messageItems[3]}/>)
  .add('Message', () => <Message {...messageItems[0]}/>)
  .add('InputField', () => 'Error because of no useContext initialization')
  .add('test', () => {
    return <>
      <Router>
        <div className="Main">
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/room">Room</Link>
            </li>
          </ul>
          <Route path="/" exact component={RoomList}/>
          <Route path="/room" component={Room}/>
        </div>
      </Router>
      </>
  })
