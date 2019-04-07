"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
require("./InputField.scss");
var Context_1 = require("./Context");
var moment = require("moment");
function InputField() {
    var _a = react_1.useState(''), text = _a[0], setText = _a[1];
    var setTextCallback = react_1.useCallback(function (e) { return setText(e.target.value); }, [text]);
    var _b = react_1.useContext(Context_1.MessageContext), _ = _b._, dispatch = _b.dispatch;
    function send() {
        var prefix = parseInt(moment().format('HH'), 10) < 12 ? '午前' : '午後';
        var time = (moment().format('HH:mm')).toString();
        dispatch({
            type: 'SEND_MESSAGE',
            message: text,
            time: prefix + " " + time,
        });
        setText('');
    }
    // userNameの取り出しにuseContextを使ってもいい
    // keyPress Enterでもreducerが動くようにする
    return (<div className="Input">
            <input className="Input__Field" type="text" value={text} onChange={setTextCallback} onKeyPress={function (e) {
        if (e.key === 'Enter') {
            send();
        }
    }}/>
            <div className="Input__Icon">
                {text ?
        <i className="Input__Icon--Send material-icons" onClick={send}>send</i> :
        <i className="Input__Icon--Mic material-icons">mic</i>}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </div>
        </div>);
}
exports.default = InputField;
