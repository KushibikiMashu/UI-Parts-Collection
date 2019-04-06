import React from "react";
import Message from './Message'
import { messageItems } from './data'

export default function MessageList() {
  const messages = messageItems.map(item => <Message {...item}/>)

  return (
    <>
      {messages}
    </>
  )
}