//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

import { Device } from '@ionic-native/device/ngx'
import { Geoposition } from '@ionic-native/geolocation/ngx'
import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'

import MainState from '../back/MainState'
import mainActions from '../back/singletons/mainActions'

import styles from './MainComponent.css'

class MainComponent extends PureComponent<MainState> {
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

  renderDeviceLabel(device: Device) {
    return device
      ? `platform: ${device.platform}, model: ${device.model}`
      : 'Unknown'
  }

  renderLocationLabel(location: Geoposition) {
    return this.props.location
      ? this.obtainLocationLabel(this.props.location)
      : 'Unknown'
  }

  obtainLocationLabel(location: Geoposition) {
    return (
      <div className={styles.data}>
        <div>&nbsp;latitude: {location.coords.latitude || 'Unknown'}</div>
        <div>&nbsp;longitude: {location.coords.longitude || 'Unknown'}</div>
        <div>&nbsp;altitude: {location.coords.altitude || 'Unknown'}</div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <ion-card>
            <ion-card-header>
                <ion-card-title id='test'>The Typescript Ionic Native React App</ion-card-title>
                <ion-card-subtitle
                  text-uppercase
                  class={styles.theText}
                >
                  <div
                    id='deviceData'
                    className={styles.dataContainer}
                  >
                    Device: <span className={styles.data}>{this.renderDeviceLabel(this.props.device)}</span>
                  </div>
                  <div
                    id='locationData'
                    className={styles.dataContainer}
                  >
                    Location: <span className={styles.data}>{this.renderLocationLabel(this.props.location)}</span>
                  </div>
                  <div className={styles.dataContainer}>
                    Text: <span className={styles.data}>{this.props.text}</span>
                  </div>
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
                <Link to='/secondary'>
                  <ion-button
                    color='warning'
                  >
                    Switch
                  </ion-button>
                </Link>
          </ion-card-content>
        </ion-card>
      </div>
    )
  }
}

export default MainComponent
