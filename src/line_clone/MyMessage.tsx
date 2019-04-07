import * as React from "react";
import './MyMessage.scss'

export default function MyMessage(): JSX.Element {
    return (
        <div className="MyMessage">
            <div className="MyMessage__Left">
                <p className="MyMessage__Time">午後 15:00</p>
            </div>
            <div className="MyMessage__Center">
                <p className="MyMessage__Body">a</p>
            </div>
        </div>
    )
}
