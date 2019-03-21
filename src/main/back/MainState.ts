//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt
import { Device } from '@ionic-native/device/ngx'
import { Geoposition } from '@ionic-native/geolocation/ngx';

interface MainState {
  device?: Device,
  isOn: boolean,
  location?: Geoposition,
  text: string
}

export default MainState
