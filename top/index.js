import React, {useContext, useEffect} from 'react';

import Eyepatch from './Eyepatch';
import Hat from './Hat';
import Hijab from './Hijab';
import LongHairBigHair from './LongHairBigHair';
import LongHairBob from './LongHairBob';
import LongHairBun from './LongHairBun';
import LongHairCurly from './LongHairCurly';
import LongHairCurvy from './LongHairCurvy';
import LongHairDreads from './LongHairDreads';
import LongHairFrida from './LongHairFrida';
import LongHairFro from './LongHairFro';
import LongHairFroBand from './LongHairFroBand';
import LongHairMiaWallace from './LongHairMiaWallace';
import LongHairNotTooLong from './LongHairNotTooLong';
import LongHairShavedSides from './LongHairShavedSides';
import LongHairStraight from './LongHairStraight';
import LongHairStraight2 from './LongHairStraight2';
import LongHairStraightStrand from './LongHairStraightStrand';
import NoHair from './NoHair';
import ShortHairDreads01 from './ShortHairDreads01';
import ShortHairDreads02 from './ShortHairDreads02';
import ShortHairFrizzle from './ShortHairFrizzle';
import ShortHairShaggyMullet from './ShortHairShaggyMullet';
import ShortHairShortCurly from './ShortHairShortCurly';
import ShortHairShortFlat from './ShortHairShortFlat';
import ShortHairShortRound from './ShortHairShortRound';
import ShortHairShortWaved from './ShortHairShortWaved';
import ShortHairSides from './ShortHairSides';
import ShortHairTheCaesar from './ShortHairTheCaesar';
import ShortHairTheCaesarSidePart from './ShortHairTheCaesarSidePart';
import Turban from './Turban';
import WinterHat1 from './WinterHat1';
import WinterHat2 from './WinterHat2';
import WinterHat3 from './WinterHat3';
import WinterHat4 from './WinterHat4';
import ShortHairShaggy from './ShortHairShaggy';
import {AvatarContext} from '../context';

const top = [
  {name: 'eyepatch', element: <Eyepatch />},
  {name: 'hat', element: <Hat />},
  {name: 'hijab', element: <Hijab />},
  {name: 'longHairBigHair', element: <LongHairBigHair />},
  {name: 'longHairBob', element: <LongHairBob />},
  {name: 'longHairBun', element: <LongHairBun />},
  {name: 'longHairCurly', element: <LongHairCurly />},
  {name: 'longHairCurvy', element: <LongHairCurvy />},
  {name: 'longHairDreads', element: <LongHairDreads />},
  {name: 'longHairFrida', element: <LongHairFrida />},
  {name: 'longHairFro', element: <LongHairFro />},
  {name: 'longHairFroBand', element: <LongHairFroBand />},
  {name: 'longHairMiaWallace', element: <LongHairMiaWallace />},
  {name: 'longHairNotTooLong', element: <LongHairNotTooLong />},
  {name: 'longHairShavedSides', element: <LongHairShavedSides />},
  {name: 'longHairStraight', element: <LongHairStraight />},
  {name: 'longHairStraight2', element: <LongHairStraight2 />},
  {name: 'longHairStraightStrand', element: <LongHairStraightStrand />},
  {name: 'noHair', element: <NoHair />},
  {name: 'shortHairDreads01', element: <ShortHairDreads01 />},
  {name: 'shortHairDreads02', element: <ShortHairDreads02 />},
  {name: 'ShortHairFrizzle', element: <ShortHairFrizzle />},
  {name: 'shortHairShaggyMullet', element: <ShortHairShaggyMullet />},
  {name: 'shortHairShortCurly', element: <ShortHairShortCurly />},
  {name: 'shortHairShortFlat', element: <ShortHairShortFlat />},
  {name: 'shortHairShortRound', element: <ShortHairShortRound />},
  {name: 'shortHairShortWaved', element: <ShortHairShortWaved />},
  {name: 'shortHairSides', element: <ShortHairSides />},
  {name: 'shortHairTheCaesar', element: <ShortHairTheCaesar />},
  {name: 'shortHairTheCaesarSidePart', element: <ShortHairTheCaesarSidePart />},
  {name: 'turban', element: <Turban />},
  {name: 'winterHat1', element: <WinterHat1 />},
  {name: 'winterHat2', element: <WinterHat2 />},
  {name: 'winterHat3', element: <WinterHat3 />},
  {name: 'winterHat4', element: <WinterHat4 />},
  {name: 'shortHairShaggy', element: <ShortHairShaggy />},
];

const Top = ({value, facial, facialColor, facialHairColorValue, children}) => {
  const {setFacialHairValue, setFacialHairColor, setHairColor} =
    useContext(AvatarContext);

  useEffect(() => {
    setFacialHairValue(facial);
    setFacialHairColor(facialColor);
    setHairColor(facialHairColorValue);
  }, [value, facial, facialColor, facialHairColorValue]);

  if (value) {
    return top.map(e => {
      if (e.name === value) {
        return (
          <>
            {e.element}
            {children}
          </>
        );
      }
    });
  }
  return null;
};

export default Top;
