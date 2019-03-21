//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt
import * as GeolocationModule from '@ionic-native/geolocation/ngx'
import { Device } from '@ionic-native/device/ngx'
import mainActions from '../../../main/back/singletons/mainActions'
import mainDispatcher from '../../../main/back/singletons/mainDispatcher'
import sinon from 'sinon'

const sandbox = sinon.createSandbox()

describe('mainActions tests', () => {
  it('should dispatch ON action', () => {
    spyOn(mainDispatcher, "dispatch")
    mainActions.on('SomeText')

    expect(mainDispatcher.dispatch).toHaveBeenCalledWith({
      type: 'ON',
      data: 'ON:SomeText'
    })
  })

  it('should dispatch OFF action', () => {
    spyOn(mainDispatcher, "dispatch")
    mainActions.off('SomeText')

    expect(mainDispatcher.dispatch).toHaveBeenCalledWith({
      type: 'OFF',
      data: 'OFF:SomeText'
    })
  })

  it('should dispatch TOGGLE action', () => {
    spyOn(mainDispatcher, "dispatch")
    mainActions.toggle()

    expect(mainDispatcher.dispatch).toHaveBeenCalledWith({
      type: 'TOGGLE',
      data: 'toggle'
    })
  })

  it('should dispatch IONIC_READY action', () => {
    spyOn(mainDispatcher, "dispatch")
    sandbox.stub(GeolocationModule.Geolocation.prototype, 'getCurrentPosition')
      .callsFake(function () {
        return {
          then: (fn) => fn({
            coords: 'coords'
          })
        }
      })
    mainActions.ionicReady()

    expect(mainDispatcher.dispatch).toHaveBeenCalledWith(jasmine.objectContaining({
      type: 'IONIC_READY',
      data: {
        device: jasmine.any(Device),
        location: {
          coords: 'coords'
        }
      }
    }))
  })
})
