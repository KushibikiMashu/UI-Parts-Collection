import React from "react";
import { storiesOf } from "@storybook/react";

import App from '../../src/line_clone/App'
import ChatRoomItem from '../../src/line_clone/RoomItem'
import reactLogo from "../../src/line_clone/react-logo.svg";

storiesOf('LINE CLONE', module)
  .add('App', () => <App/>)
  .add('ChatRoomItem', () => <ChatRoomItem {...item}/>)

const item = {
  roomName: "React.js",
  description: "React & StorybookでLINEのUIを模写する",
  time: "午前 11:18",
  newPostCount: "4",
  img: reactLogo,
}