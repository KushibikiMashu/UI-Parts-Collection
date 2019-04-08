import * as React from 'react'

interface State {
    messages: Array<Message>
}

enum ActionTypes {
    SEND_MESSAGE = 'SEND_MESSAGE'
}

interface Message {
    body: string,
    time: string,
}

type Action =
    | { type: ActionTypes.SEND_MESSAGE, payload: Message}

export function reducer(state: State, action: Action) {
    switch (action.type) {
        case ActionTypes.SEND_MESSAGE:
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
                    body,
                    time,
                })
            })
        default:
            throw new Error()
    }
}
