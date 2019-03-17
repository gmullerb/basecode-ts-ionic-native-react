//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt
import mainActions from '../../../main/back/singletons/mainActions'
import mainDispatcher from '../../../main/back/singletons/mainDispatcher'

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
})
