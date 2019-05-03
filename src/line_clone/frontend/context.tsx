import { createContext } from 'react'
import { IState, IAction } from './types'

interface IContext {
  state: IState
  dispatch: React.Dispatch<IAction>
}

const MessageContext = createContext<IContext>({} as any)

export { MessageContext }
