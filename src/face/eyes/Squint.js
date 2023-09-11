import React from 'react';
import {uniqueId} from 'lodash';
import {Circle, Defs, G, Mask, Path, Use} from 'react-native-svg';

const Squint = () => {
  const path1 = uniqueId('react-path-');
  const path2 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');
  const mask2 = uniqueId('react-mask-');

  return (
    <G id="Eyes/Squint-😊" transform="translate(0.000000, 8.000000)">
      <Defs>
        <Path
          d="M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z"
          id={path1}
        />
        <Path
          d="M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z"
          id={path2}
        />
      </Defs>
      <G id="Eye" transform="translate(16.000000, 13.000000)">
        <Mask id={mask1} fill="white">
          <Use xlinkHref={'#' + path1} />
        </Mask>
        <Use id="The-white-stuff" fill="#FFFFFF" xlinkHref={'#' + path1} />
        <Circle
          fillOpacity="0.699999988"
          fill="#000000"
          mask={`url(#${mask1})`}
          cx="14"
          cy="10"
          r="6"
        />
      </G>
      <G id="Eye" transform="translate(68.000000, 13.000000)">
        <Mask id={mask2} fill="white">
          <Use xlinkHref={'#' + path2} />
        </Mask>
        <Use id="Eyeball-Mask" fill="#FFFFFF" xlinkHref={'#' + path2} />
        <Circle
          fillOpacity="0.699999988"
          fill="#000000"
          mask={`url(#${mask2})`}
          cx="14"
          cy="10"
          r="6"
        />
      </G>
    </G>
  );
};
export default Squint;
