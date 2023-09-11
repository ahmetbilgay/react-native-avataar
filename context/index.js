import React, {useState, createContext} from 'react';

export const AvatarContext = createContext();

const AvatarProvider = ({children}) => {
  const [facialHairValue, setFacialHairValue] = useState('');
  const [facialHairColor, setFacialHairColor] = useState('');
  const [hairColor, setHairColor] = useState('');

  return (
    <AvatarContext.Provider
      value={{
        facialHairValue,
        setFacialHairValue,
        facialHairColor,
        setFacialHairColor,
        hairColor,
        setHairColor,
      }}>
      {children}
    </AvatarContext.Provider>
  );
};

export default AvatarProvider;
