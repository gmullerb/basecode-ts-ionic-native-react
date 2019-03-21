//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt
import { Device } from '@ionic-native/device/ngx'
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

import mainDispatcher from './mainDispatcher'

export interface ActionType {
  type: 'ON' | 'OFF' | 'TOGGLE' | 'IONIC_READY'
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

interface IonicReadyAction extends ActionType {
  type: 'IONIC_READY'
  data: {
    device: Device,
    location: Geoposition
  }
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
  },
  ionicReady() {
    const geolocation = new Geolocation()
      .getCurrentPosition()
      .then((location: Geoposition) => {
        mainDispatcher.dispatch({
          type: 'IONIC_READY',
          data: {
            device: new Device(),
            location
          }
        })
      })
  }
}

export default mainActions
