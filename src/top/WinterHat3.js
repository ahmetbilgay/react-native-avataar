import React from 'react';
import {uniqueId} from 'lodash';
import FacialHair from './facialHair';
import HatColor from './HatColor';
import {Circle, Defs, G, Mask, Path, Rect, Use} from 'react-native-svg';

const WinterHat3 = () => {
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
          d="M66,0 L66,0 C102.450793,-6.69590214e-15 132,29.5492065 132,66 L132,71 L0,71 L0,66 C-4.46393476e-15,29.5492065 29.5492065,6.69590214e-15 66,0 Z"
          id={path1}
        />

        <Path
          d="M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z"
          id={path2}
        />
      </Defs>
      <Mask id={mask1} fill="white">
        <Use xlinkHref={'#' + path3} />
      </Mask>
      <G id="Mask" />
      <G
        id="Top/Accessories/Winter-Hat-3"
        transform="translate(-1.000000, 0.000000)">
        <G
          id="hat"
          strokeWidth="1"
          fillRule="evenodd"
          transform="translate(67.000000, 12.000000)">
          <Circle id="puff" fill="#F4F4F4" cx="66" cy="8" r="20" />
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
        <FacialHair />
      </G>
    </G>
  );
};

export default WinterHat3;
