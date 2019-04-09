import * as React from "react"
import MyMessage from './MyMessage'
import OtherMessage from './OtherMessage'
import { messageItems } from '../data'
import { MessageContext } from "../Context"
import axios from 'axios'

export default function MessageList() {
  React.useEffect(() => {
    axios.get('http://localhost:3005/messages/list')
      .then(function (res) {
        console.log(res.data);
      }).catch(function (err) {
      console.log(err);
    });
  }, [])

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
