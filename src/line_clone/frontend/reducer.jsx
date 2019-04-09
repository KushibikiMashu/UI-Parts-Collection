import * as React from 'react'
import axios from 'axios'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      const {body, time} = action.payload
      const newState = Object.assign({}, state, {
        messages: state.messages.concat({
          userName: 'self',
          body,
          time,
        })
      })

      axios.post('http://localhost:3005/messages', {
        userName: 'self',
        body,
        time,
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (err) {
          console.log(err);
        });

      // axiosでAPIをcallする

      return newState
    default:
      break;
  }

  return state;
}
