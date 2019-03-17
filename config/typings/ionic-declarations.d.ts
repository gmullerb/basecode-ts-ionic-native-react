//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

import { any } from "prop-types";
import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-anchor': React.DetailedHTMLProps<any, any>
      'ion-button': React.DetailedHTMLProps<any, any>
      'ion-card': React.DetailedHTMLProps<any, any>
      'ion-card-content': React.DetailedHTMLProps<any, any>
      'ion-card-header': React.DetailedHTMLProps<any, any>
      'ion-card-title': React.DetailedHTMLProps<any, any>
      'ion-card-subtitle': React.DetailedHTMLProps<any, any>
      'ion-img': React.DetailedHTMLProps<any, any>;
      'ion-input': React.DetailedHTMLProps<any, any>;
      'ion-item': React.DetailedHTMLProps<any, any>;
      'ion-text': React.DetailedHTMLProps<any, any>
    }
  }
}
