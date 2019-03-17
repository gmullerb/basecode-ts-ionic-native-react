//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt
import { shallow } from 'enzyme'
import React from 'react'

import MainComponent from '../../main/front/MainComponent'
import mainActions from '../../main/back/singletons/mainActions'

describe('MainComponent tests', () => {
  it('should render component', () => {
    const main = shallow(<MainComponent isOn={false} text='SomeTest'/>)

    expect(main.exists()).toBe(true)
  })

  it('should handle on click', () => {
    spyOn(mainActions, "on")
    const main = shallow(<MainComponent isOn={false} text='SomeTest'/>)
    main.instance().textInput = {
      value: 'someText'
    }

    main.find('#onButton').simulate('click')

    expect(mainActions.on).toHaveBeenCalledWith('someText')
  })

  it('should handle off click', () => {
    spyOn(mainActions, "off")
    const main = shallow(<MainComponent isOn={false} text='SomeTest'/>)
    main.instance().textInput = {
      value: 'someText'
    }

    main.find('#offButton').simulate('click')

    expect(mainActions.off).toHaveBeenCalledWith('someText')
  })

  it('should handle toggle click', () => {
    spyOn(mainActions, "toggle")
    const main = shallow(<MainComponent isOn={false} text='SomeTest'/>)

    main.find('#toggleButton').simulate('click')

    expect(mainActions.toggle).toHaveBeenCalled()
  })
})
