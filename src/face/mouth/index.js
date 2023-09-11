import React from 'react';

import Concerned from './Concerned';
import Default from './Default';
import Disbelief from './Disbelief';
import Eating from './Eating';
import Grimace from './Grimace';
import Sad from './Sad';
import ScreamOpen from './ScreamOpen';
import Serious from './Serious';
import Smile from './Smile';
import Tongue from './Tongue';
import Twinkle from './Twinkle';
import Vomit from './Vomit';

const mounth = [
  {name: 'concerned', element: <Concerned />},
  {name: 'default', element: <Default />},
  {name: 'disbelief', element: <Disbelief />},
  {name: 'eating', element: <Eating />},
  {name: 'grimace', element: <Grimace />},
  {name: 'sad', element: <Sad />},
  {name: 'screamOpen', element: <ScreamOpen />},
  {name: 'serious', element: <Serious />},
  {name: 'smile', element: <Smile />},
  {name: 'tongue', element: <Tongue />},
  {name: 'twinkle', element: <Twinkle />},
  {name: 'vomit', element: <Vomit />},
];

const Mounth = ({value}) => {
  if (value) {
    return mounth.map(e => {
      if (e.name === value) {
        return e.element;
      }
    });
  }
  return null;
};

export default Mounth;
