import * as React from 'react'

export function reducer(state, action) {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return Object.assign({}, state, {
                messages: state.messages.concat({
                    userName: "self",
                    body: action.message,
                    time: (new Date()).toString(),
                    image: null,
                })
            })
        default:
            throw new Error();
    }
}
