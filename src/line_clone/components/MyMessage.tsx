import * as React from "react"
import './MyMessage.scss'
import {messageItem as Props} from '../Types'

export default function MyMessage({body, time}: Props): JSX.Element {
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
