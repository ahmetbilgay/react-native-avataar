import React, {useContext} from 'react';

import BeardLight from './BeardLight';
import BeardMajestic from './BeardMajestic';
import BeardMedium from './BeardMedium';
import Blank from './Blank';
import MoustacheFancy from './MoustacheFancy';
import MoustacheMagnum from './MoustacheMagnum';
import {AvatarContext} from '../../context';

const facialHair = [
  {name: 'beardLight', element: <BeardLight />},
  {name: 'BeardMajestic', element: <BeardMajestic />},
  {name: 'BeardMedium', element: <BeardMedium />},
  {name: 'Blank', element: <Blank />},
  {name: 'MoustacheFancy', element: <MoustacheFancy />},
  {name: 'MoustacheMagnum', element: <MoustacheMagnum />},
];

const FacialHair = () => {
  const {facialHairValue} = useContext(AvatarContext);

  if (facialHairValue) {
    return facialHair.map(e => {
      if (e.name === facialHairValue) {
        return <>{e.element}</>;
      }
    });
  }
  return null;
};

export default FacialHair;
