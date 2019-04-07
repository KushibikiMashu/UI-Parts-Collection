import * as React from "react"
import './Room.scss'
import MessageList from './MessageList'
import InputField from './InputField'
import {useReducer} from "react"
import {Reducer} from "../Reducer"
import {MessageContext} from '../Context'

export default function Room(): JSX.Element {
    const [state, dispatch] = useReducer(Reducer, {messages: []})
    return (
        <MessageContext.Provider value={{state, dispatch}}>
            <MessageList/>
            <InputField/>
        </MessageContext.Provider>
    )
}