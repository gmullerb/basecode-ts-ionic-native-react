//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt
import {Dispatcher} from 'flux'
import {ReduceStore} from 'flux/utils'

import {ActionType} from './mainActions'
import mainDispatcher from './mainDispatcher'
import MainState from '../MainState'

class MainStore extends ReduceStore<MainState, ActionType> {
  constructor(dispatcher: Dispatcher<ActionType>) {
    super(dispatcher)
  }

  getInitialState(): MainState {
    return {
      isOn: false,
      text: 'initial'
    }
  }

  reduce(prevState: MainState, action: ActionType) {
    switch (action.type) {
        case 'ON':
            return {
              ...prevState,
              isOn: true,
              text: action.data
            }
        case 'OFF':
            return {
              ...prevState,
              isOn: false,
              text: action.data
            }
        case 'TOGGLE':
            return {
              ...prevState,
              isOn: !prevState.isOn,
              text: 'toggle'
            }
        case 'IONIC_READY':
            return {
              ...prevState,
              ...action.data
            }
        default:
            return prevState
    }
  }
}

export default new MainStore(mainDispatcher)
