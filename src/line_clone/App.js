import React from 'react';
import './App.css';

import logo from '../sample/logo.svg';

export default function App() {
  return (
    <>
      <div className="Main">
        <div className="ChatRoom">
          <div className="ChatRoom--Img">
            <img src={logo} alt="logo"/>
          </div>
          <div className="ChatRoom--Containts">
            <div className="ChatRoom--Containts_Left">
              <p className="ChatRoom--Containts_RoomName">React (7)</p>
              <p className="ChatRoom--Containts_Description">React & StorybookでLINEのUIを模写する</p>
            </div>
            <div className="ChatRoom--Containts_Right">
              <p className="ChatRoom--Containts_Time">午前 11:18</p>
              <p className="ChatRoom--Containts_Badge">4</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}