import React from 'react';
import './App.css';
import ChatRoom from './ChatRoom'

import reactLogo from './react-logo.svg';
import vueLogo from './vue-logo.png';
import angularLogo from './angular-logo.svg';

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
