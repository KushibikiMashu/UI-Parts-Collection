import * as React from 'react'

const initialState = {messages: {}}

function reducer(state, action) {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return Object.assign({}, state, {
                messages: state.arr.concat(action.message)
            });
    }
}