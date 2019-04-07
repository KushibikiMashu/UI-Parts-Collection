"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
require("./InputField.scss");
var Reducer_1 = require("./Reducer");
function InputField() {
    var _a = react_1.useState(''), text = _a[0], setText = _a[1];
    var inputCallback = react_1.useCallback(function (e) { return setText(e.target.value); }, [text]);
    var _b = react_1.useReducer(Reducer_1.reducer, { messages: [] }), _ = _b[0], dispatch = _b[1];
    // userNameの取り出しにuseContextを使ってもいい
    // keyPress Enterでもreducerが動くようにする
    return (<div className="Input">
            <input className="Input__Field" type="text" value={text} onChange={inputCallback}/>
            <div className="Input__Icon">
                {text ?
        <i className="Input__Icon--Send material-icons" onClick={function () {
            dispatch({
                type: 'SEND_MESSAGE',
                message: text
            });
            setText('');
        }}>send</i> :
        <i className="Input__Icon--Mic material-icons">mic</i>}
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </div>
        </div>);
}
exports.default = InputField;
