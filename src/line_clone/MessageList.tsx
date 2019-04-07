import * as React from "react";
import MyMessage from './MyMessage'
import Message from './Message'
import {messageItems} from './data'
import {useContext} from "react";
import {MessageContext} from "./Context";

export default function MessageList(): JSX.Element {
    const {state} = useContext(MessageContext)
    const allMessages = messageItems.concat(state.messages).map(
        item => {
            return item.userName === 'self' ?
                <MyMessage {...item} key={item.body}/> :
                <Message {...item} key={item.body}/>
        })
    return (
        <>
            {allMessages}
        </>
    )
}
