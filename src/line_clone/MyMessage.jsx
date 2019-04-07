"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./MyMessage.scss");
function MyMessage(_a) {
    var body = _a.body, time = _a.time;
    return (<div className="MyMessage">
            <div className="MyMessage__Left">
                <p className="MyMessage__Time">{time}</p>
            </div>
            <div className="MyMessage__Center">
                <p className="MyMessage__Body">{body}</p>
            </div>
        </div>);
}
exports.default = MyMessage;
