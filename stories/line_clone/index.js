import React from "react";
import { storiesOf } from "@storybook/react";

import App from '../../src/line_clone/App'
import ChatRoom from '../../src/line_clone/ChatRoom'
import reactLogo from "../../src/line_clone/react-logo.svg";

storiesOf('LINE CLONE', module)
  .add('App', () => <App/>)
  .add('ChatRoom', () => <ChatRoom {...props.react}/>)

const props = {
  "react": {
    roomName: "React.js",
    description: "React & StorybookでLINEのUIを模写する",
    time: "午前 11:18",
    newPostCount: "4",
    img: reactLogo,
  }
}