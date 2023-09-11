import React from 'react';
import {G, Rect} from 'react-native-svg';

const Skin = ({maskID, color}) => {
  return (
    <G id="skin" mask={`url(#${maskID})`} fill={color}>
      <G transform="translate(0.000000, 0.000000)" id="Color">
        <Rect x="0" y="0" width="264" height="280" />
      </G>
    </G>
  );
};

export default Skin;
