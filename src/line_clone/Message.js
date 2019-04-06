import React from "react";
import './Message.css'
import logo from './react-logo.svg'

export default function Message() {
  return (
    <div className="Message">
      <div className="Message__Left">
        <img className="Message__Img" width="40" src={logo} alt="user"/>
      </div>
      <div className="Message__Center">
        <p className="Message__UserName">username</p>
        <p className="Message__Message">message</p>
      </div>
      <div className="Message__Right">
        <p className="Message__Time">time</p>
      </div>
    </div>
  )
}