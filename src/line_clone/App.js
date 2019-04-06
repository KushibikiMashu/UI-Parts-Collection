import React from 'react';
import './App.css';

import reactLogo from './react-logo.svg';
import vueLogo from './vue-logo.png';
import angularLogo from './angular-logo.svg';

function ChatRoom({roomName, description, time, newPostCount, img}) {
  return (
    <>
      <div className="ChatRoom">
        <div className="ChatRoom__Left">
          <img className="ChatRoom__Image" src={img} alt="logo"/>
        </div>
        <div className="ChatRoom__Center">
          <p className="ChatRoom__RoomName">{roomName}</p>
          <p className="ChatRoom__Description">{description}</p>
        </div>
        <div className="ChatRoom__Right">
          <p className="ChatRoom__Time">{time}</p>
          {newPostCount !== "0" && <p className="ChatRoom__Badge">{newPostCount}</p>}
        </div>
      </div>
    </>
  )
}

export default function App() {
  const {react, vue, angular} = props
  return (
    <>
      <div className="Main">
        <ChatRoom {...react}/>
        <ChatRoom {...vue}/>
        <ChatRoom {...angular}/>
      </div>
    </>
  )
}

const props = {
  "react": {
    roomName: "React.js",
    description: "React & StorybookでLINEのUIを模写する",
    time: "午前 11:18",
    newPostCount: "4",
    img: reactLogo,
  },
  "vue": {
    roomName: "Vue.js",
    description: " Vue.jsのルームです",
    time: "午前 7:08",
    newPostCount: "1",
    img: vueLogo,
  },
  "angular": {
    roomName: "AngularJS",
    description: " AngularJSのルームです",
    time: "昨日",
    newPostCount: "0",
    img: angularLogo,
  }
}
