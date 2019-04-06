import React from "react";
import ChatRoomItem from './ChatRoomItem'
import reactLogo from "./react-logo.svg";
import vueLogo from "./vue-logo.png";
import angularLogo from "./angular-logo.svg";

export default function ChatRoomList() {
  const chatRooms = items.map(item => <ChatRoomItem {...item}/>)

  return (
    <>
      {chatRooms}
    </>
  )
}

const items = [
  {
    roomName: "React.js",
    description: "React & StorybookでLINEのUIを模写する",
    time: "午前 11:18",
    newPostCount: "4",
    img: reactLogo
  },
  {
    roomName: "Vue.js",
    description: " Vue.jsのルームです",
    time: "午前 7:08",
    newPostCount: "1",
    img: vueLogo
  },
  {
    roomName: "AngularJS",
    description: " AngularJSのルームです",
    time: "昨日",
    newPostCount: "0",
    img: angularLogo
  }
]
