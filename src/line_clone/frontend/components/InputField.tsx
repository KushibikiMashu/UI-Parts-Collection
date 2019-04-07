import * as React from "react"
import './InputField.scss'
import {MessageContext} from '../Context'
import moment = require('moment')

function getTime(): string {
    const prefix = parseInt(moment().format('HH'), 10) < 12 ? '午前' : '午後'
    const now = (moment().format('HH:mm')).toString()
    return `${prefix} ${now}`
}

export default function InputField(): JSX.Element {
    const [text, setText] = React.useState('')
    const setTextCallback = React.useCallback(e => setText(e.target.value), [text])
    const {_, dispatch} = React.useContext(MessageContext)

    function send() {
        const message = text.trim()
        if (message === '') {
            setText('')
            return
        }

        dispatch({
            type: 'SEND_MESSAGE',
            message,
            time: getTime(),
        })
        setText('')
    }

    return (
        <div className="Input">
            <input
                className="Input__Field"
                type="text"
                value={text}
                onChange={setTextCallback}
                onKeyPress={e => {
                    if (e.key === 'Enter') {
                        send()
                    }
                }}
            />
            <div className="Input__Icon">
                {text ?
                    <i
                        className="Input__Icon--Send material-icons"
                        onClick={send}
                    >send</i> :
                    <i className="Input__Icon--Mic material-icons">mic</i>
                }
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </div>
        </div>
    )
}