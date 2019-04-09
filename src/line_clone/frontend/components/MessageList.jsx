import * as React from "react"
import MyMessage from './MyMessage'
import OtherMessage from './OtherMessage'
import { messageItems } from '../data'
import { MessageContext } from "../Context"

export default function MessageList() {
  const {state} = React.useContext(MessageContext)
  const allMessages = messageItems.concat(state.messages).map(
    item => {
      return item.userName === 'self' ?
        <MyMessage {...item} key={item.id}/> :
        <OtherMessage {...item} key={item.id}/>
    })
  return (
    <>
      {allMessages}
    </>
  )
}
