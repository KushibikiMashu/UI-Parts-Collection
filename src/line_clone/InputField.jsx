"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
require("./InputField.scss");
function InputField() {
    var _a = React.useState(''), text = _a[0], setText = _a[1];
    var inputCallback = React.useCallback(function (e) { return setText(e.target.value); }, [text]);
    // userNameの取り出しにuseContextを使ってもいい
    // useReducerを使う。
    // keyPress Enterでもこの関数が動くようにする
    function send() {
        // const json = JSON.stringify({
        //     userName: "self",
        //     body: text,
        //      time: (new Date()).toString()
        // })
        // console.log(json);
        var obj = {
            userName: "self",
            body: text,
            time: (new Date()).toString(),
            image: null,
        };
        console.log(obj);
        setText('');
    }
    return (<div className="Input">
            <input className="Input__Field" type="text" value={text} onChange={inputCallback}/>
            <div className="Input__Icon">
                {text ?
        <i className="Input__Icon--Send material-icons" onClick={send}>send</i> :
        <i className="Input__Icon--Mic material-icons">mic</i>}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </div>
        </div>);
}
exports.default = InputField;
