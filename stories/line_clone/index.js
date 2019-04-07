import * as React from "react";
import { storiesOf } from "@storybook/react";

import App from '../../src/line_clone/App'
import Room from '../../src/line_clone/Room'
import RoomList from '../../src/line_clone/RoomList'
import RoomItem from '../../src/line_clone/RoomItem'
import MessageList from '../../src/line_clone/MessageList'
import Message from '../../src/line_clone/Message'
import InputField from '../../src/line_clone/InputField'
import { roomItems, messageItems } from '../../src/line_clone/data'

storiesOf('LINE CLONE', module)
  .add('App', () => <App/>)
  .add('Room', () => <Room/>)
  .add('RoomList', () => <RoomList/>)
  .add('RoomItem', () => <RoomItem {...roomItems[0]}/>)
  .add('MessageList', () => <MessageList/>)
  .add('Message', () => <Message {...messageItems[0]}/>)
  .add('InputField', () => <InputField/>)
