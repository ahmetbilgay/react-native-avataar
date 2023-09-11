import React from 'react';
import {uniqueId} from 'lodash';
import {Defs, G, Mask, Path, Rect, Use} from 'react-native-svg';

const Vomit = () => {
  const path1 = uniqueId('react-path-');
  const path2 = uniqueId('react-path-');
  const mask1 = uniqueId('react-mask-');

  return (
    <G id="Mouth/Vomit" transform="translate(2.000000, 52.000000)">
      <Defs>
        <Path
          d="M34.0082051,12.6020819 C35.1280248,23.0929366 38.2345159,31.9944054 53.9961505,31.9999974 C69.757785,32.0055894 72.9169073,23.0424631 73.9942614,12.5047938 C74.0809675,11.6567158 73.1738581,10.9999965 72.0369872,10.9999965 C65.3505138,10.9999965 62.6703194,12.4951994 53.9894323,12.4999966 C45.3085452,12.5047938 40.7567994,10.9999965 36.0924943,10.9999965 C34.9490269,10.9999965 33.8961688,11.5524868 34.0082051,12.6020819 Z"
          id={path1}
        />
        <Path
          d="M59.9170416,36 L60,36 C60,39.3137085 62.6862915,42 66,42 C69.3137085,42 72,39.3137085 72,36 L72,35 L72,31 C72,27.6862915 69.3137085,25 66,25 L66,25 L42,25 L42,25 C38.6862915,25 36,27.6862915 36,31 L36,31 L36,35 L36,38 C36,41.3137085 38.6862915,44 42,44 C45.3137085,44 48,41.3137085 48,38 L48,36 L48.0829584,36 C48.5590365,33.1622867 51.0270037,31 54,31 C56.9729963,31 59.4409635,33.1622867 59.9170416,36 Z"
          id={path2}
        />
      </Defs>
      <Mask id={mask1} fill="white">
        <Use
          xlinkHref={'#' + path1}
          transform="translate(54.000000, 21.499998) scale(1, -1) translate(-54.000000, -21.499998) "
        />
      </Mask>
      <Use
        id="Mouth"
        fillOpacity="0.699999988"
        fill="#000000"
        fillRule="evenodd"
        transform="translate(54.000000, 21.499998) scale(1, -1) translate(-54.000000, -21.499998) "
        xlinkHref={'#' + path1}
      />
      <Rect
        id="Teeth"
        fill="#FFFFFF"
        fillRule="evenodd"
        mask={`url(#${mask1})`}
        x="39"
        y="0"
        width="31"
        height="16"
        rx="5"
      />
      <G id="Vomit-Stuff">
        <Use fill="#88C553" fillRule="evenodd" xlinkHref={'#' + path2} />
        <Use fill="black" fillOpacity="1" xlinkHref={'#' + path2} />
      </G>
    </G>
  );
};
export default Vomit;
