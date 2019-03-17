//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt
import { mount } from 'enzyme'
import React from 'react'
import * as ReactRouter from 'react-router-dom'
import sinon from 'sinon';

import RoutedContainer from '../../main/back/RoutedContainer';

import MainComponent from '../../main/front/MainComponent'
import SecondaryComponent from '../../main/front/SecondaryComponent'

const sandbox = sinon.createSandbox()

describe('RoutedContainer tests', () => {
  beforeEach(function () {
    sandbox.stub(ReactRouter.BrowserRouter.prototype, 'render')
      .callsFake(function () {
        return <div>{this.props.children}</div> // eslint-disable-line no-invalid-this
      });
  });

  afterEach(function () {
    sandbox.restore();
  });

  it('should render Main component', () => {
    const main = mount(<ReactRouter.MemoryRouter initialEntries={['/']}>
      <RoutedContainer />
    </ReactRouter.MemoryRouter>)

    expect(main.find(MainComponent).length).toBe(1)
  })

  it('should render Secondary component', () => {
    const main = mount(<ReactRouter.MemoryRouter initialEntries={['/secondary']}>
      <RoutedContainer />
    </ReactRouter.MemoryRouter>)

    expect(main.find(SecondaryComponent).length).toBe(1)
  })
})
