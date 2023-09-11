import React from 'react';
import BlazerShirt from './BlazerShirt';
import BlazerSweater from './BlazerSweater';
import CollarSweater from './CollarSweater';
import GraphicShirt from './GraphicShirt';
import Hoodie from './Hoodie';
import Overall from './Overall';
import ShirtCrewNeck from './ShirtCrewNeck';
import ShirtScoopNeck from './ShirtScoopNeck';
import ShirtVNeck from './ShirtVNeck';

const clothes = [
  {name: 'blazerShirt', element: <BlazerShirt />},
  {name: 'blazerSweater', element: <BlazerSweater />},
  {name: 'collarSweater', element: <CollarSweater />},
  {name: 'graphicShirt', element: <GraphicShirt />},
  {name: 'hoddie', element: <Hoodie />},
  {name: 'overall', element: <Overall />},
  {name: 'shirtCrewNeck', element: <ShirtCrewNeck />},
  {name: 'shirtScoopNeck', element: <ShirtScoopNeck />},
  {name: 'shirtVNeck', element: <ShirtVNeck />},
];

const Clothes = ({value}) => {
  if (clothes) {
    return clothes.map(e => {
      if (e.name === value) {
        return e.element;
      }
    });
  }
  return null;
};

export default Clothes;
