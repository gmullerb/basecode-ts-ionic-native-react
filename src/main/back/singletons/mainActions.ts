//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt
import mainDispatcher from './mainDispatcher'

export interface ActionType {
  type: 'ON' | 'OFF' | 'TOGGLE'
  data?: any
}

interface OnAction extends ActionType {
  type: 'ON'
  data: string
}

interface OffAction extends ActionType {
  type: 'OFF'
  data: string
}

interface ToggleAction extends ActionType {
  type: 'TOGGLE'
  data: string
}

const mainActions = {
  on(onText: string) {
    mainDispatcher.dispatch({
      type: 'ON',
      data: 'ON:' + onText
    })
  },
  off(offText: string) {
    mainDispatcher.dispatch({
      type: 'OFF',
      data: 'OFF:' + offText
    })
  },
  toggle() {
    mainDispatcher.dispatch({
      type: 'TOGGLE',
      data: 'toggle'
    })
  }
}

export default mainActions
