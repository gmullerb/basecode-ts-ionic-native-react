//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

import {Container} from 'flux/utils'
import React, { Component } from 'react'
import { RouteComponentProps, Switch } from 'react-router'
import { BrowserRouter, Route } from 'react-router-dom'

import MainComponent from '../front/MainComponent'
import SecondaryComponent from '../front/SecondaryComponent'

import MainStoreState from './MainStoreState'
import mainStore from './singletons/mainStore'

class RoutedContainer extends Component<{}, MainStoreState> {
  static getStores() {
    return [mainStore]
  }

  static calculateState(): MainStoreState {
    return {
      main: mainStore.getState()
    }
  }

  renderMainComponent = (routeProps: RouteComponentProps) => {
    return (
      <MainComponent {...this.state.main}/>
    )
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path='/secondary'
            component={SecondaryComponent}
          />
          <Route
            path='/'
            render={this.renderMainComponent}
          />
        </Switch>
      </BrowserRouter>
    )
  }

}

export default Container.create(RoutedContainer)
