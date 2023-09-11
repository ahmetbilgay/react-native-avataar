import React from 'react';
import {G, Rect} from 'react-native-svg';

const colors = {
  black: '#262E33',
  blue01: '#65C9FF',
  blue02: '#5199E4',
  blue03: '#25557C',
  gray01: '#E6E6E6',
  gray02: '#929598',
  heather: '#3C4F5C',
  pastelBlue: '#B1E2FF',
  pastelGreen: '#A7FFC4',
  pastelOrange: '#FFDEB5',
  pastelRed: '#FFAFB9',
  pastelYellow: '#FFFFB1',
  pink: '#FF488E',
  red: '#FF5C5C',
  white: '#FFFFFF',
};

const Colors = ({maskID}) => {
  return (
    <G
      id="Color/Palette/Gray-01"
      mask={`url(#${maskID})`}
      fillRule="evenodd"
      fill={colors.black}>
      <Rect id="🖍Color" x="0" y="0" width="264" height="280" />
    </G>
  );
};

export default Colors;
