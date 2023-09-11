import React from 'react';

import Blank from './Blank';
import Kurt from './Kurt';
import Prescription01 from './Prescription01';
import Prescription02 from './Prescription02';
import Round from './Round';
import Sunglasses from './Sunglasses';
import Wayfarers from './Wayfarers';

const accessories = [
  {name: 'blank', element: <Blank />},
  {name: 'kurt', element: <Kurt />},
  {name: 'prescription01', element: <Prescription01 />},
  {name: 'prescription02', element: <Prescription02 />},
  {name: 'round', element: <Round />},
  {name: 'sunglasses', element: <Sunglasses />},
  {name: 'wayfarers', element: <Wayfarers />},
];

const Accessories = ({value}) => {
  if (value) {
    return accessories.map(e => {
      if (e.name === value) {
        return e.element;
      }
    });
  }
  return null;
};

export default Accessories;
