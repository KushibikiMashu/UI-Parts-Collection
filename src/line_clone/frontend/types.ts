export interface IState {
  messages: string[]
}

type ActionType = 'ADD_MESSAGE' | 'RECEIVE_MESSAGES'

export interface IAction {
  type: ActionType
  payload?: any
  meta?: any
  error?: any
}
