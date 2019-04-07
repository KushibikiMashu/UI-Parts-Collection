import * as React from "react";
import './Message.css'
import {messageItem as Props} from './Types'

export default function Message({userName, body, time, image}: Props): JSX.Element {
  return (
    <div className="Message">
      <div className="Message__Left">
        <img className="Message__Image" src={image} alt="user"/>
      </div>
      <div className="Message__Center">
        <p className="Message__UserName">{userName}</p>
        <p className="Message__Body">{body}</p>
      </div>
      <div className="Message__Right">
        <p className="Message__Time">{time}</p>
      </div>
    </div>
  )
}
