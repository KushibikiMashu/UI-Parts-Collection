import * as React from "react";
import MyMessage from './MyMessage'
import Message from './Message'
import { messageItems } from './data'

export default function MessageList(): JSX.Element {
  const messages = messageItems.map(item => <Message {...item} key={item.time}/>)
    messages.push(<MyMessage/>);

  return (
    <>
      {messages}
    </>
  )
}
