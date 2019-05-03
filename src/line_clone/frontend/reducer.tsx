import { IState, IAction } from './types'

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return Object.assign({}, state, {
        messages: state.messages.concat(action.payload),
      })

    case 'RECEIVE_MESSAGES':
      return Object.assign({}, state, {
        messages: state.messages.concat(action.payload),
      })

    default:
      return state
  }
}
