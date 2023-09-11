import React, {useContext} from 'react';
import {G, Rect} from 'react-native-svg';
import {AvatarContext} from '../../context';

const Colors = ({maskID}) => {
  const {facialHairColor} = useContext(AvatarContext);
  return (
    <G id="Color/Hair/Brown" mask={`url(#${maskID})`} fill={facialHairColor}>
      <G transform="translate(-32.000000, 0.000000)" id="Color">
        <Rect x="0" y="0" width="264" height="244" />
      </G>
    </G>
  );
};
export default Colors;
