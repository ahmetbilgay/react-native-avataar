import React from 'react';
import {uniqueId} from 'lodash';
import {Circle, Defs, G, Mask, Path, Rect, Use} from 'react-native-svg';

const Concerned = () => {
  const path1 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');

  return (
    <G id="Mouth/Concerned" transform="translate(2.000000, 52.000000)">
      <Defs>
        <Path
          d="M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z"
          id={path1}
        />
      </Defs>
      <Mask id={mask1} fill="white">
        <Use
          xlinkHref={'#' + path1}
          transform="translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) "
        />
      </Mask>
      <Use
        id="Mouth"
        fillOpacity="0.699999988"
        fill="#000000"
        fillRule="evenodd"
        transform="translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) "
        xlinkHref={'#' + path1}
      />
      <Rect
        id="Teeth"
        fill="#FFFFFF"
        fillRule="evenodd"
        mask={`url(#${mask1})`}
        x="39"
        y="2"
        width="31"
        height="16"
        rx="5"
      />
      <G
        id="Tongue"
        strokeWidth="1"
        fillRule="evenodd"
        mask={`url(#${mask1})`}
        fill="#FF4F6D">
        <G transform="translate(38.000000, 24.000000)">
          <Circle id="friend?" cx="11" cy="11" r="11" />
          <Circle id="How-you-doing" cx="21" cy="11" r="11" />
        </G>
      </G>
    </G>
  );
};

export default Concerned;
