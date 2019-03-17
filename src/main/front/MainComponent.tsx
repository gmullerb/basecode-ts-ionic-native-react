//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

import React, {PureComponent} from 'react'

import mainActions from '../back/singletons/mainActions'

import styles from './MainComponent.css'

export interface Props {
  isOn: boolean
  text: string
}

class MainComponent extends PureComponent<Props> {
  textInput: {value: string}

  handleToggleClick() {
    mainActions.toggle()
  }

  handleOnClick = () => {
    mainActions.on(this.textInput.value)
  }

  handleOffClick = () => {
    mainActions.off(this.textInput.value)
  }

  render() {
    return (
      <div>
        <ion-card>
            <ion-card-header>
                <ion-card-title id='test'>The Typescript Ionic React App</ion-card-title>
                <ion-card-subtitle
                  text-uppercase
                  class={styles.theText}
                >
                  {this.props.text}
                </ion-card-subtitle>
            </ion-card-header>
            <ion-card-content>
                <div
                  className={styles.theInput}
                >
                  <ion-input
                    color='secondary'
                    padding
                    ref={(element: any) => this.textInput = element}
                    type='text'
                    placeholder='some input'
                  />
                </div>
                <ion-button
                  id='toggleButton'
                  color='primary'
                  onClick={this.handleToggleClick}
                >
                  Toggle
                </ion-button>
                <ion-button
                  id='onButton'
                  color='light'
                  onClick={this.handleOnClick}
                >
                  On
                </ion-button>
                <ion-button
                  id='offButton'
                  color='dark'
                  onClick={this.handleOffClick}
                >
                   Off
                </ion-button>
                <ion-button
                  color='warning'
                  href='/secondary'
                >
                  Switch
                </ion-button>
          </ion-card-content>
        </ion-card>
      </div>
    )
  }
}

export default MainComponent
