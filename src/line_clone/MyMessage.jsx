"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./MyMessage.scss");
function MyMessage() {
    return (<div className="MyMessage">
            <div className="MyMessage__Left">
                <p className="MyMessage__Time">午後 15:00</p>
            </div>
            <div className="MyMessage__Center">
                <p className="MyMessage__Body">a</p>
            </div>
        </div>);
}
exports.default = MyMessage;
