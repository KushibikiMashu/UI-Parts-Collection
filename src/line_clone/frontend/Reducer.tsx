import * as React from 'react'

export function reducer(state, action) {
    switch (action.type) {
        case 'SEND_MESSAGE':
            const {message, time} = action
            return Object.assign({}, state, {
                messages: state.messages.concat({
                    userName: "self",
                    body: message,
                    time,
                    image: null,
                })
            })
        default:
            throw new Error()
    }
}
