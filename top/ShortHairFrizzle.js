import React from 'react';
import {uniqueId} from 'lodash';
import FacialHair from './facialHair';
import HairColor from './HairColor';
import {Defs, G, Mask, Path, Rect, Use} from 'react-native-svg';

const ShortHairFrizzle = () => {
  const mask1 = uniqueId('react-mask-');
  const mask2 = uniqueId('react-mask-');
  const path1 = uniqueId('react-path-');
  const path2 = uniqueId('react-path-');

  return (
    <G id="Top" strokeWidth="1" fillRule="evenodd">
      <Defs>
        <Rect id={path2} x="0" y="0" width="264" height="280" />
        <Path
          d="M90.9102919,55.3613196 L175.085702,55.3613196 C193.333279,44.8338001 196.759397,26.1510357 183.849606,9.92600089 C180.635746,5.88682054 175.085702,21.6755614 158.028596,22.6504878 C140.97149,23.6254143 142.608865,16.3498661 124.45759,19.0739248 C106.306316,21.7979835 108.311575,36.37843 96.4671989,39.8768239 C88.5709482,42.2090865 86.7186458,47.370585 90.9102919,55.3613196 Z"
          id={path1}
        />
      </Defs>
      <Mask id={mask2} fill="white">
        <Use xlinkHref={'#' + path2} />
      </Mask>
      <G id="Mask" />
      <G id="Top/Short-Hair/Frizzle" mask={`url(#${mask2})`}>
        <G transform="translate(-1.000000, 0.000000)">
          <FacialHair />
          <Mask id={mask1} fill="white">
            <Use xlinkHref={'#' + path1} />
          </Mask>
          <Use
            id="Hair-Maks"
            stroke="none"
            fill="#252E32"
            fillRule="evenodd"
            xlinkHref={'#' + path1}
          />
          <HairColor maskID={mask1} />
        </G>
      </G>
    </G>
  );
};

export default ShortHairFrizzle;
