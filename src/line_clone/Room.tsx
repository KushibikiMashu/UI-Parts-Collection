import * as React from "react";
import './Room.scss'
import MessageList from './MessageList'
import InputField from './InputField'

export default function Room(): JSX.Element {
    return (
        <>
            <MessageList/>
            <InputField/>
        </>
    )
}