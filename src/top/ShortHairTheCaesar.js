import React from 'react';
import {uniqueId} from 'lodash';
import FacialHair from './facialHair';
import HairColor from './HairColor';
import {Defs, G, Mask, Path, Rect, Use} from 'react-native-svg';

const ShortHairTheCaesar = () => {
  const mask1 = uniqueId('react-mask-');
  const mask2 = uniqueId('react-mask-');
  const path1 = uniqueId('react-path-');
  const path2 = uniqueId('react-path-');

  return (
    <G id="Top" strokeWidth="1" fillRule="evenodd">
      <Defs>
        <Rect id={path1} x="0" y="0" width="264" height="280" />
        <Path
          d="M1,64 C1.34685629,65.488448 2.67275588,65.2226722 3,64 C2.53726005,62.445722 6.29594493,35.2480719 16,28 C19.618222,25.4833872 39.0082164,23.2319099 58.3126144,23.245568 C77.4086061,23.2590787 96.4208396,25.5105561 100,28 C109.704055,35.2480719 113.46274,62.445722 113,64 C113.327244,65.2226722 114.653144,65.488448 115,64 C115.719178,53.7019177 115,0.274362825 58,1 C1,1.72563718 0.280821545,53.7019177 1,64 Z"
          id={path2}
        />
      </Defs>
      <Mask id={mask1} fill="white">
        <Use xlinkHref={'#' + path1} />
      </Mask>
      <G id="Mask" />
      <G id="Top/Short-Hair/The-Caesar" mask={`url(#${mask1})`}>
        <G transform="translate(-1.000000, 0.000000)">
          <FacialHair />
          <G
            id="Hair"
            strokeWidth="1"
            fillRule="evenodd"
            transform="translate(75.000000, 34.000000)">
            <Mask id={mask2} fill="white">
              <Use xlinkHref={'#' + path2} />
            </Mask>
            <Use id="Caesar" fill="#28354B" xlinkHref={'#' + path2} />
            <HairColor maskID={mask2} />
          </G>
        </G>
      </G>
    </G>
  );
};

export default ShortHairTheCaesar;
