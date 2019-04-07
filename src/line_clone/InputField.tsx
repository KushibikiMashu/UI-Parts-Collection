import * as React from "react";
import {useState, useCallback, useContext} from "react";
import './InputField.scss'
import {MessageContext} from './Context'
import moment = require('moment');

export default function InputField(): JSX.Element {
    const [text, setText] = useState('')
    const inputCallback = useCallback(e => setText(e.target.value), [text])
    const {_, dispatch} = useContext(MessageContext)

    function handleClick() {
        const prefix = parseInt(moment().format('HH'), 10) < 12 ? '午前' : '午後'
        const time = (moment().format('HH:mm')).toString();
        dispatch({
            type: 'SEND_MESSAGE',
            message: text,
            time: `${prefix} ${time}`,
        })
        setText('')
    }

    // userNameの取り出しにuseContextを使ってもいい
    // keyPress Enterでもreducerが動くようにする

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
                    <i
                        className="Input__Icon--Send material-icons"
                        onClick={handleClick}
                    >send</i> :
                    <i className="Input__Icon--Mic material-icons">mic</i>
                }
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </div>
        </div>
    )
}