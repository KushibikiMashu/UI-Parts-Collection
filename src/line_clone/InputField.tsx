import * as React from "react";
import './InputField.scss'

export default function InputField(): JSX.Element {
    const [text, setText] = React.useState('')
    const inputCallback = React.useCallback(e => setText(e.target.value), [text])

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
                    <i className="Input__Icon--Send material-icons">send</i> :
                    <i className="Input__Icon--Mic material-icons">mic</i>
                }
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            </div>
        </div>
    )
}