import React from "react";
import { storiesOf } from "@storybook/react";

import App from '../../src/line_clone/App'
import RoomItem from '../../src/line_clone/RoomItem'
import Message from '../../src/line_clone/Message'
import reactLogo from "../../src/line_clone/react-logo.svg";

storiesOf('LINE CLONE', module)
  .add('App', () => <App/>)
  .add('RoomItem', () => <RoomItem {...item}/>)
  .add('Message', () => <Message/>)

const item = {
  roomName: "React.js",
  description: "React & StorybookでLINEのUIを模写する",
  time: "午前 11:18",
  newPostCount: "4",
  img: reactLogo,
}