import React from 'react';
import {Circle, G} from 'react-native-svg';

const EyeRoll = () => {
  return (
    <G id="Eyes/Eye-Roll-🙄" transform="translate(0.000000, 8.000000)">
      <Circle id="Eyeball" fill="#FFFFFF" cx="30" cy="22" r="14" />
      <Circle id="The-white-stuff" fill="#FFFFFF" cx="82" cy="22" r="14" />
      <Circle
        id="Eye"
        fillOpacity="0.699999988"
        fill="#000000"
        cx="30"
        cy="14"
        r="6"
      />
      <Circle
        id="Eye"
        fillOpacity="0.699999988"
        fill="#000000"
        cx="82"
        cy="14"
        r="6"
      />
    </G>
  );
};

export default EyeRoll;
