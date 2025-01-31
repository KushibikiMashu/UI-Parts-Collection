import * as React from "react"
import MyMessage from './MyMessage'
import OtherMessage from './OtherMessage'
import { messageItems } from '../data'
import { MessageContext } from "../context"
import axios from 'axios'

export default function MessageList() {
  const {state, dispatch} = React.useContext(MessageContext)

  React.useEffect(() => {
    axios.get('http://localhost:3005/messages/list')
      .then(res => {
        dispatch({
          type: 'RECEIVE_MESSAGES',
          payload: res.data || [],
        })
      })
  }, [])

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
