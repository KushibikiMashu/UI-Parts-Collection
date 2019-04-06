import React from "react";
import logo from './react-logo.svg'

export default function Room() {
  return (
    <div className="Room">
      <div className="Room__Left">
        <img className="Room__Img" width="40" src={logo} alt="user"/>
      </div>
      <div className="Room__Center">
        <p className="Room__UserName">username</p>
        <p className="Room__Message">message</p>
      </div>
      <div className="Room__Right">
        <p className="Room__Time">time</p>
      </div>
    </div>
  )
}