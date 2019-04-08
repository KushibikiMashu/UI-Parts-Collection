import * as React from "react"
import MyMessage from './MyMessage'
import OtherMessage from './OtherMessage'
import {messageItems} from '../data'
import {MessageContext} from "../Context"

export default function MessageList(): JSX.Element {
    const {state, _} = React.useContext(MessageContext)
    const allMessages = messageItems.concat(state.messages).map(
        item => {
            return item.userName === 'self' ?
                <MyMessage {...item} key={item.body}/> :
                <OtherMessage {...item} key={item.body}/>
        })
    return (
        <>
            {allMessages}
        </>
    )
}
