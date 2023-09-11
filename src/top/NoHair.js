import React from 'react';
import {uniqueId} from 'lodash';

import FacialHair from './facialHair';
import {Defs, G, Mask, Rect, Use} from 'react-native-svg';

const NoHair = () => {
  const mask1 = uniqueId('react-mask-');
  const path1 = uniqueId('react-path-');

  return (
    <G id="Top" strokeWidth="1" fillRule="evenodd">
      <Defs>
        <Rect id={path1} x="0" y="0" width="264" height="280" />
      </Defs>
      <Mask id={mask1} fill="white">
        <Use xlinkHref={'#' + path1} />
      </Mask>
      <G id="Mask" />
      <G id="Top/No-Hair" mask={`url(#${mask1})`}>
        <G transform="translate(-1.000000, 0.000000)">
          <FacialHair />
        </G>
      </G>
    </G>
  );
};

export default NoHair;
