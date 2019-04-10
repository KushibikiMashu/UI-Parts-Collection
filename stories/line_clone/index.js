import * as React from "react"
import { storiesOf } from "@storybook/react"

import App from '../../src/line_clone/frontend/components/App'
import Room from '../../src/line_clone/frontend/components/Room'
import RoomList from '../../src/line_clone/frontend/components/RoomList'
import RoomItem from '../../src/line_clone/frontend/components/RoomItem'
// import MessageList from '../../src/line_clone/frontend/components/MessageList'
import MyMessage from '../../src/line_clone/frontend/components/MyMessage'
import OtherMessage from '../../src/line_clone/frontend/components/OtherMessage'
// import InputField from '../../src/line_clone/frontend/components/InputField'
import { roomItems, messageItems } from '../../src/line_clone/frontend/data'

storiesOf('LINE CLONE', module)
  .add('App', () => <App/>)
  .add('Room', () => <Room/>)
  .add('RoomList', () => <>{roomItems.map(item => (<RoomItem {...item} key={item.id}/>))}</>)
  .add('RoomItem', () => <RoomItem {...roomItems[0]}/>)
  .add('MessageListMock', () => <MessageListMock/>)
  .add('MyMessage', () => <MyMessage {...messageItems[3]}/>)
  .add('OtherMessage', () => <OtherMessage {...messageItems[0]}/>)
  .add('InputField', () => <InputFieldMock/>)


function MessageListMock() {
  return <>
    {messageItems.map(
      item => {
        return item.userName === 'self' ?
          <MyMessage {...item} key={item.id}/> :
          <OtherMessage {...item} key={item.id}/>
      })}
  </>
}

function InputFieldMock() {
  const [text, setText] = React.useState('')
  const [clicked, watchClicked] = React.useState(false)
  const setTextCallback = React.useCallback(e => setText(e.target.value), [text])

  React.useEffect(() => {
    const message = text.trim()
    if (message === '') {
      setText('')
      return
    }
    setText('')
  }, [clicked])

  return (
    <div className="Input">
      <input
        className="Input__Field"
        type="text"
        value={text}
        onChange={setTextCallback}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            watchClicked(!clicked)
          }
        }}
      />
      <div className="Input__Icon">
        {text ?
          <i
            className="Input__Icon--Send material-icons"
            onClick={() => watchClicked(!clicked)}
          >send</i> :
          <i className="Input__Icon--Mic material-icons">mic</i>
        }
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      </div>
    </div>
  )
}
