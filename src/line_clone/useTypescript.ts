import * as React from 'react'

// reducer

interface State {
    messages: Message[]
}

enum ActionTypes {
    SEND_MESSAGE = 'SEND_MESSAGE'
}

interface Message {
    body: string,
    time: string,
}

type Action =
    | { type: ActionTypes.SEND_MESSAGE, payload: Message }


// Types

export type roomItem = {
    roomName: string,
    description: string,
    time: string,
    newPostCount: string,
    img: string,
}

export type messageItem = {
    id: number,
    userName: string,
    body: string,
    time: string,
    image?: string,
}