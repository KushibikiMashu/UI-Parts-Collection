import * as React from 'react'
import axios from 'axios'

export const reducer = (state, action) => {
  switch (action.type) {
    // SEND_MESSAGEは副作用になっているので、redux-thunkを使うなりなんとかしたい
    // useEffect内でAPIをコールするのが良さそう
    // Stateの変更→APIをコール→Storeに追加という流れ
    case 'SEND_MESSAGE':
      axios.post('http://localhost:3005/messages', {
        userName: action.payload.body,
        body: action.payload.body,
        time: action.payload.time,
      }).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
      return

    case 'ADD_MESSAGE':
      return Object.assign({}, state, {
        messages: state.messages.concat({
          id: state.messages.length + 5,
          userName: action.payload.userName,
          body: action.payload.body,
          time: action.payload.time,
        })
      })

    default:
      break;
  }

  return state;
}
