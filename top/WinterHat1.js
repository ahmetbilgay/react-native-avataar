import React from 'react';
import {uniqueId} from 'lodash';

import FacialHair from './facialHair';
import HatColor from './HatColor';
import {Defs, G, Mask, Path, Rect, Use} from 'react-native-svg';

const WinterHat1 = () => {
  const mask1 = uniqueId('react-mask-');
  const mask2 = uniqueId('react-mask-');
  const path1 = uniqueId('react-path-');
  const path2 = uniqueId('react-path-');
  const path3 = uniqueId('react-path-');

  return (
    <G id="Top">
      <Defs>
        <Rect id={path3} x="0" y="0" width="264" height="280" />
        <Path
          d="M120,54 L20,54 L20,155 C20,160.522847 15.5228475,165 10,165 C4.4771525,165 6.76353751e-16,160.522847 0,155 L0,54 L0,44 C-2.9759565e-15,19.699471 19.699471,4.46393476e-15 44,0 L96,0 C120.300529,-4.46393476e-15 140,19.699471 140,44 L140,54 L140,155 C140,160.522847 135.522847,165 130,165 C124.477153,165 120,160.522847 120,155 L120,54 Z"
          id={path1}
        />

        <Rect id={path2} x="74" y="50" width="118" height="36" rx="8" />
      </Defs>
      <Mask id={mask1} fill="white">
        <Use xlinkHref={'#' + path3} />
      </Mask>
      <G id="Mask" />
      <G
        id="Top/Accessories/Winter-Hat-1"
        transform="translate(-1.000000, 0.000000)">
        <G
          id="hat"
          strokeWidth="1"
          fillRule="evenodd"
          transform="translate(63.000000, 20.000000)">
          <Path
            d="M1,48 L23.6714286,48 L23.6714286,153.664286 C23.6714286,159.924828 18.5962564,165 12.3357143,165 C6.07517216,165 1,159.924828 1,153.664286 L1,48 Z M116.328571,48 L139,48 L139,153.664286 C139,159.924828 133.924828,165 127.664286,165 C121.403744,165 116.328571,159.924828 116.328571,153.664286 L116.328571,48 Z"
            id="inside"
            fill="#F4F4F4"
          />
          <Mask id={mask2} fill="white">
            <Use xlinkHref={'#' + path1} />
          </Mask>
          <Use id="hat-mask" fill="#D8D8D8" xlinkHref={'#' + path1} />
          <HatColor maskID={mask2} defaultColor="Red" />
        </G>
        <G id="hat-front">
          <Use fill="black" fillOpacity="1" xlinkHref={'#' + path2} />
          <Use fill="#F4F4F4" fillRule="evenodd" xlinkHref={'#' + path2} />
        </G>
        <FacialHair value={'BeardMedium'} />
      </G>
    </G>
  );
};

export default WinterHat1;
