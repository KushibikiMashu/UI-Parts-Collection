import React from 'react';
import './App.css';

import logo from '../sample/logo.svg';

function ChatRoom({roomName, description, time, newPostCount, img}) {
  return (
    <div className="ChatRoom">
      <div className="ChatRoom--Img">
        <img src={img} alt="logo"/>
      </div>
      <div className="ChatRoom--Containts">
        <div className="ChatRoom--Containts_Left">
          <p className="ChatRoom--Containts_RoomName">{roomName}</p>
          <p className="ChatRoom--Containts_Description">{description}</p>
        </div>
        <div className="ChatRoom--Containts_Right">
          <p className="ChatRoom--Containts_Time">{time}</p>
          <p className="ChatRoom--Containts_Badge">{newPostCount}</p>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const props = {
    roomName: "React (7)",
    description: "React & StorybookでLINEのUIを模写する",
    time:"午前 11:18",
    newPostCount:"4",
    img: logo,
  }
  return (
    <>
      <div className="Main">
        <ChatRoom {...props}/>
        <ChatRoom {...props}/>
      </div>
    </>
  )
}