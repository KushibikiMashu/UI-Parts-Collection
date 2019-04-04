import React from 'react';
import './App.css';

import logo from '../sample/logo.svg';

export default function App() {
  return (
    <>
      <div className="Main">
        <div className="ChatRoom">
          <div className="ChatRoom--Img">
            <img src={logo} width="100" alt="logo"/>
          </div>
          <div className="ChatRoom--Containts">
            <div className="ChatRoom--Containts_Wrapper">
            <p className="ChatRoom--Containts_RoomName">熊野鍋</p>
            <p className="ChatRoom--Containts_Time">午前 11:18</p>
            </div>
            <div className="ChatRoom--Containts_Description">
              <p>おれ多分、7/6に上海行って、11日に西安でみんなと合流かな</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}