"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./Message.scss");
function Message(_a) {
    var userName = _a.userName, body = _a.body, time = _a.time, image = _a.image;
    return (<>
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
        </>);
}
exports.default = Message;
