import * as React from "react";
import './InputField.scss'

export default function InputField(): JSX.Element {
    const [text, setText] = React.useState('')
    const inputCallback = React.useCallback(e => setText(e.target.value), [text])

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
        const obj = {
            userName: "self",
            body: text,
            time: (new Date()).toString()
        }
        console.log(obj);
        setText('')
    }

    return (
        <div className="Input">
            <input
                className="Input__Field"
                type="text"
                value={text}
                onChange={inputCallback}
            />
            <div className="Input__Icon">
                {text ?
                    <i className="Input__Icon--Send material-icons" onClick={send}>send</i> :
                    <i className="Input__Icon--Mic material-icons">mic</i>
                }
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </div>
        </div>
    )
}