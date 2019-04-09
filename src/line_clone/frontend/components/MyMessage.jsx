import * as React from "react"
import './MyMessage.scss'

export default function MyMessage({body, time}) {
  return (
    <div className="MyMessage">
      <div className="MyMessage__Left">
        <p className="MyMessage__Time">{time}</p>
      </div>
      <div className="MyMessage__Center">
        <p className="MyMessage__Body">{body}</p>
      </div>
    </div>
  )
}
