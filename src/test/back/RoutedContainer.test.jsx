//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt
import * as ReactRouterModule from 'react-router-dom'
import MainComponent from '../../main/front/MainComponent'
import { mount } from 'enzyme'
import React from 'react'
import RoutedContainer from '../../main/back/RoutedContainer'
import SecondaryComponent from '../../main/front/SecondaryComponent'
import sinon from 'sinon'

const sandbox = sinon.createSandbox()

describe('RoutedContainer tests', () => {
  beforeEach(function () {
    sandbox.stub(ReactRouterModule.BrowserRouter.prototype, 'render')
      .callsFake(function () {
        return <div>{this.props.children}</div> // eslint-disable-line no-invalid-this
      })
  })

  afterEach(function () {
    sandbox.restore()
  })

  it('should render Main component', () => {
    const main = mount(<ReactRouterModule.MemoryRouter initialEntries={['/']}>
      <RoutedContainer />
    </ReactRouterModule.MemoryRouter>)

    expect(main.find(MainComponent).length).toBe(1)
  })

  it('should render Secondary component', () => {
    const main = mount(<ReactRouterModule.MemoryRouter initialEntries={['/secondary']}>
      <RoutedContainer />
    </ReactRouterModule.MemoryRouter>)

    expect(main.find(SecondaryComponent).length).toBe(1)
  })
})
