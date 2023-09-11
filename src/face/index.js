import React from 'react';
import Eyebrow from './eyebrow';
import Eyes from './eyes';
import Mouth from './mouth';
import Nose from './nose';
import {G} from 'react-native-svg';

const Face = ({mountValue, eyesValue, eyeBrowValue}) => {
  return (
    <G id="Face" transform="translate(76.000000, 82.000000)" fill="#000000">
      <Mouth value={mountValue} />
      <Nose />
      <Eyes value={eyesValue} />
      <Eyebrow value={eyeBrowValue} />
    </G>
  );
};
export default Face;
