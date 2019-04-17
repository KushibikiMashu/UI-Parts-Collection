import * as React from "react"
import './Room.scss'
import MessageList from './MessageList'
import InputField from './InputField'
import { reducer } from "../reducer"
import { MessageContext } from '../Context'

export default function Room() {
  const [state, dispatch] = React.useReducer(reducer, {messages: []})
  return <>
    <MessageContext.Provider value={{state, dispatch}}>
      <MessageList/>
      <InputField/>
    </MessageContext.Provider>
  </>
}
