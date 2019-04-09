import * as React from "react"
import './OtherMessage.scss'

export default function OtherMessage({userName, body, time, image}) {
  return (
    <>
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
    </>
  )
}
