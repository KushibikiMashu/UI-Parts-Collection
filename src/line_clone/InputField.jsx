"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./InputField.scss");
function InputField() {
    var _a = React.useState(''), text = _a[0], setText = _a[1];
    var inputCallback = React.useCallback(function (e) { return setText(e.target.value); }, [text]);
    return (<div className="Input">
            <input className="Input__Field" type="text" value={text} onChange={inputCallback}/>
            <i className="Input__Icon--Send material-icons">send</i>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
        </div>);
}
exports.default = InputField;
