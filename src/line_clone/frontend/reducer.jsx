import * as React from 'react'

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      const {body, time} = action.payload
      const ocj = Object.assign({}, state, {
        messages: state.messages.concat({
          body,
          time,
        })
      })
      console.log(ocj);
      return Object.assign({}, state, {
        messages: state.messages.concat({
          userName: 'self',
          body,
          time,
        })
      })
    default:
      throw new Error()
  }
}
