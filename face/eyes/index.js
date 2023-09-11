import React from 'react';

import Close from './Close';
import Cry from './Cry';
import Default from './Default';
import Dizzy from './Dizzy';
import EyeRoll from './EyeRoll';
import Happy from './Happy';
import Hearts from './Hearts';
import Side from './Side';
import Squint from './Squint';
import Surprised from './Surprised';
import Wink from './Wink';
import WinkWacky from './WinkWacky';

const eyes = [
  {name: 'close', element: <Close />},
  {name: 'cry', element: <Cry />},
  {name: 'default', element: <Default />},
  {name: 'dizzy', element: <Dizzy />},
  {name: 'eyeroll', element: <EyeRoll />},
  {name: 'happy', element: <Happy />},
  {name: 'hearts', element: <Hearts />},
  {name: 'side', element: <Side />},
  {name: 'squint', element: <Squint />},
  {name: 'surprised', element: <Surprised />},
  {name: 'wink', element: <Wink />},
  {name: 'winkWacky', element: <WinkWacky />},
];

const Eyes = ({value}) => {
  if (value) {
    return eyes.map(e => {
      if (e.name === value) {
        return e.element;
      }
    });
  }
  return null;
};

export default Eyes;
