//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt
import mainDispatcher from '../../../main/back/singletons/mainDispatcher'
import mainStore from '../../../main/back/singletons/mainStore'

describe('mainStore tests', () => {
  it('should used mainDispatcher', () => {
    expect(mainStore.getDispatcher()).toEqual(mainDispatcher)
  })

  it('should initialized state', () => {
    const initialState = mainStore.getInitialState()

    expect(initialState).toEqual({
      isOn: false,
      text: 'initial'
    })
  })

  it('should reduce when ON action is received', () => {
    const oldState = {
      isOn: false,
      text: 'initial'
    }
    const newState = mainStore.reduce(oldState, {
      type: 'ON',
      data: 'SomeTest'
    })

    expect(newState).toEqual({
      isOn: true,
      text: 'SomeTest'
    })
  })

  it('should reduce when OFF action is received', () => {
    const oldState = {
      isOn: false,
      text: 'initial'
    }
    const newState = mainStore.reduce(oldState, {
      type: 'OFF',
      data: 'SomeTest'
    })

    expect(newState).toEqual({
      isOn: false,
      text: 'SomeTest'
    })
  })

  it('should reduce when Toggle action is received', () => {
    const oldState = {
      isOn: false,
      text: 'initial'
    }
    const newState = mainStore.reduce(oldState, {
      type: 'TOGGLE',
      data: 'SomeTest'
    })

    expect(newState).toEqual({
      isOn: true,
      text: 'toggle'
    })
  })

  it('should reduce when Ionic Ready action is received', () => {
    const oldState = {
      isOn: false,
      text: 'initial'
    }
    const newState = mainStore.reduce(oldState, {
      type: 'IONIC_READY',
      data: {
        device: 'device',
        location: 'location'
      }
    })

    expect(newState).toEqual({
      isOn: false,
      text: 'initial',
      device: 'device',
      location: 'location'
    })
  })

  it('should return prevState when an invalid action is received', () => {
    const oldState = {
      isOn: false,
      text: 'initial'
    }
    const newState = mainStore.reduce(oldState, {
      type: 'SOME_ACTION'
    })

    expect(newState).toEqual({
      isOn: false,
      text: 'initial'
    })
  })
})
