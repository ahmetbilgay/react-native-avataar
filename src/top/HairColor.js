import React, {useContext} from 'react';
import {G, Rect} from 'react-native-svg';
import {AvatarContext} from '../context';

const colors = {
  auburn: '#A55728',
  black: '#2C1B18',
  blonde: '#B58143',
  blondeGolden: '#D6B370',
  brown: '#724133',
  brownDark: '#4A312C',
  pastelPink: '#F59797',
  blue: '#000fdb',
  platinum: '#ECDCBF',
  red: '#C93305',
  silverGray: '#E8E1E1',
};

const HairColor = ({maskID}) => {
  const {hairColor} = useContext(AvatarContext);

  return (
    <G id="Skin/👶🏽-03-Brown" mask={`url(#${maskID})`} fill={hairColor}>
      <G transform="translate(0.000000, 0.000000) " id="Color">
        <Rect x="0" y="0" width="264" height="280" />
      </G>
    </G>
  );
};

export default HairColor;
