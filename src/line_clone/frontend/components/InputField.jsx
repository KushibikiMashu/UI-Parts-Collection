import * as React from "react"
import './InputField.scss'
import { MessageContext } from '../Context'
import axios from "axios";

const moment = require('moment')

// helper関数
function getTime() {
  const prefix = parseInt(moment().format('HH'), 10) < 12 ? '午前' : '午後'
  const now = (moment().format('HH:mm')).toString()
  return `${prefix} ${now}`
}

export default function InputField() {
  const [text, setText] = React.useState('')
  const [clicked, watchClicked] = React.useState(false)
  const setTextCallback = React.useCallback(e => setText(e.target.value), [text])
  const {dispatch} = React.useContext(MessageContext)

  React.useEffect(() => {
    const message = text.trim()
    if (message === '') {
      setText('')
      return
    }

    axios.post('http://localhost:3005/messages/post', {
      userName: 'self',
      body: message,
      time: getTime(),
    }).then(res => {
      dispatch({
        type: 'ADD_MESSAGE',
        payload: res.data
      })
    }).catch(err => {
      const {status, statusText} = err.response;
      console.log(`Error! HTTP Status: ${status} ${statusText}`);
    });

    setText('')

  }, [clicked])

  return (
    <div className="Input">
      <input
        className="Input__Field"
        type="text"
        value={text}
        onChange={setTextCallback}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            watchClicked(!clicked)
          }
        }}
      />
      <div className="Input__Icon">
        {text ?
          <i
            className="Input__Icon--Send material-icons"
            onClick={() => watchClicked(!clicked)}
          >send</i> :
          <i className="Input__Icon--Mic material-icons">mic</i>
        }
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </div>
    </div>
  )
}