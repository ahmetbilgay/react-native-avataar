import React from 'react';

import Angry from './Angry';
import AngryNatural from './AngryNatural';
import Default from './Default';
import DefaultNatural from './DefaultNatural';
import FlatNatural from './FlatNatural';
import RaisedExcited from './RaisedExcited';
import RaisedExcitedNatural from './RaisedExcitedNatural';
import SadConcerned from './SadConcerned';
import SadConcernedNatural from './SadConcernedNatural';
import UnibrowNatural from './UnibrowNatural';
import UpDown from './UpDown';
import UpDownNatural from './UpDownNatural';

const eyebrow = [
  {name: 'angry', element: <Angry />},
  {name: 'angryNatural', element: <AngryNatural />},
  {name: 'default', element: <Default />},
  {name: 'defaultNatural', element: <DefaultNatural />},
  {name: 'flatNatural', element: <FlatNatural />},
  {name: 'raisedExcited', element: <RaisedExcited />},
  {name: 'raisedExcitedNatural', element: <RaisedExcitedNatural />},
  {name: 'sadConcerned', element: <SadConcerned />},
  {name: 'sadConcernedNatural', element: <SadConcernedNatural />},
  {name: 'uniBrowNatural', element: <UnibrowNatural />},
  {name: 'upDown', element: <UpDown />},
  {name: 'upDownNatural', element: <UpDownNatural />},
];

const Eyebrow = ({value}) => {
  if (value) {
    return eyebrow.map(e => {
      if (e.name === value) {
        return e.element;
      }
    });
  }
  return null;
};

export default Eyebrow;
