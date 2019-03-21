//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt
import mainActions from '../../main/back/singletons/mainActions'
import MainComponent from '../../main/front/MainComponent'
import React from 'react'
import { shallow } from 'enzyme'

describe('MainComponent tests', () => {
  it('should render component', () => {
    const main = shallow(<MainComponent isOn={false} text='SomeTest'/>)

    expect(main.exists()).toBe(true)
  })

  it('should render native components', () => {
    const main = shallow(<MainComponent
      device={{
        platform: 'somePlatform',
        model: 'someModel'
      }}
      location={{
        coords: {
          latitude: 5,
          longitude: 6,
          altitude: 7
        }
      }}
    />)

    const deviceText = main.find('#deviceData').text()
    expect(deviceText).toContain('platform: somePlatform')
    expect(deviceText).toContain('model: someModel')
    const locationText = main.find('#locationData').text()
    expect(locationText).toContain('latitude: 5')
    expect(locationText).toContain('longitude: 6')
    expect(locationText).toContain('altitude: 7')
  })

  it('should render unknown location', () => {
    const main = shallow(<MainComponent
      device={{
        platform: 'somePlatform',
        model: 'someModel'
      }}
      location={{
        coords: {}
      }}
    />)

    const locationText = main.find('#locationData').text()
    expect(locationText).toContain('latitude: Unknown')
    expect(locationText).toContain('longitude: Unknown')
    expect(locationText).toContain('altitude: Unknown')
  })

  it('should handle on click', () => {
    spyOn(mainActions, 'on')
    const main = shallow(<MainComponent isOn={false} text='SomeTest'/>)
    main.instance().textInput = {
      value: 'someText'
    }

    main.find('#onButton').simulate('click')

    expect(mainActions.on).toHaveBeenCalledWith('someText')
  })

  it('should handle off click', () => {
    spyOn(mainActions, 'off')
    const main = shallow(<MainComponent isOn={false} text='SomeTest'/>)
    main.instance().textInput = {
      value: 'someText'
    }

    main.find('#offButton').simulate('click')

    expect(mainActions.off).toHaveBeenCalledWith('someText')
  })

  it('should handle toggle click', () => {
    spyOn(mainActions, 'toggle')
    const main = shallow(<MainComponent isOn={false} text='SomeTest'/>)

    main.find('#toggleButton').simulate('click')

    expect(mainActions.toggle).toHaveBeenCalled()
  })
})
