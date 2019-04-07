"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
require("./InputField.scss");
var Context_1 = require("./Context");
function InputField() {
    var _a = react_1.useState(''), text = _a[0], setText = _a[1];
    var inputCallback = react_1.useCallback(function (e) { return setText(e.target.value); }, [text]);
    var _b = react_1.useContext(Context_1.MessageContext), _ = _b._, dispatch = _b.dispatch;
    function handleClick() {
        dispatch({ type: 'SEND_MESSAGE', message: text });
        setText('');
    }
    // userNameの取り出しにuseContextを使ってもいい
    // keyPress Enterでもreducerが動くようにする
    return (<div className="Input">
            <input className="Input__Field" type="text" value={text} onChange={inputCallback}/>
            <div className="Input__Icon">
                {text ?
        <i className="Input__Icon--Send material-icons" onClick={handleClick}>send</i> :
        <i className="Input__Icon--Mic material-icons">mic</i>}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </div>
        </div>);
}
exports.default = InputField;
