import * as React from "react";
import MyMessage from './MyMessage'
import Message from './Message'
import {messageItems} from './data'

export default function MessageList(): JSX.Element {
    const messages = messageItems.map(
        item => {
            return item.userName === 'self' ?
                <MyMessage {...item}/> :
                <Message {...item} key={item.time}/>
        })

    return (
        <>
            {messages}
        </>
    )
}
