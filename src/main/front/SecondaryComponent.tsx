//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

import React, {PureComponent} from 'react'
import { Link } from 'react-router-dom'

const Secondary = () => (
  <div>
    <ion-card>
        <ion-card-header>
            <ion-card-title id='test'>Base Code for Ionic React App</ion-card-title>
            <ion-card-subtitle>Secondary</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <Link to='/'>
            Switch
          </Link>
        </ion-card-content>
    </ion-card>
  </div>
)

export default Secondary
