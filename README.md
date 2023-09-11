# react-native-avataar

This package provides a quick and straightforward solution for delivering personalized avatars to your users.

## Features

- **Easy Customization:** Offers a range of customization options such as colors, styles, and accessories for personalizing avatars.
- **SVG Support:** Creates high-quality and scalable avatars using the SVG format.
- **User-Friendly:** Provides a simple and user-friendly API for quickly generating avatars.
- **React Native Compatible:** Includes a React Native component that can be easily integrated into your projects.

## Install and Setup

1. First, add the npm package to your project:

   ```bash
   npm install react-native-avataar
   yarn add react-native-avataar
   ```

2. Install react-native-svg :

   ```bash
   npm install react-native-svg
   yarn add react-native-svg
   ```

3. For ios:

   ```bash
   cd ios && pod install
   ```

## How to use

```
import Avataar from 'react-native-avataar';
```

```
const [avataar,setAvataar] = useState({
    skinValue:"",
    clothesValue:"",
    faceValues:{
       mouth:"",
       eyes:"",
       eyeBrow:"",
    },
    topValues:{
       top:"",
       accessories:"",
       facialHairValue:"",
       facialHairColorValue:"",
       hairColorValue:"",
    }
})


<Avataar
    width={'180px'}
    height={'180px'}
    circle={true}
    clothesValue={avataar.clothesValue}
    faceValues={{
         mountValue: avataar.faceValues.mouth,
         eyesValue: avataar.faceValues.eyes,
         eyeBrowValue: avataar.faceValues.eyeBrow,
    }}
    skinValue={avataar.skinValue}
    topValues={{
         topValue: avataar.topValues.top,
         accessoriesValue: avataar.topValues.accessories,
         facialHairValue: avataar.topValues.facialHairValue,
         facialHairColorValue: avataar.topValues.facialHairColorValue,
         hairColorValue: avataar.topValues.hairColorValue,
    }}
/>
```

| Prop                             | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|----------------------------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `width`                          | string  | The width for avatar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `height`                         | string  | The height for avatar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `circle`                         | boolean | Convert avatar to circle format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `clothesValue`                   | string  | "blazerShirt", "blazerSweater", "collarSweater", "graphicShirt", "hoddie", "overall", "shirtCrewNeck", "shirtScoopNeck","shirtVNeck"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `faceValues.mountValue`          | string  | 'concerned', 'default', 'disbelief', 'eating', 'grimace', 'sad','screamOpen', 'serious', 'smile', 'tongue', 'twinkle', 'vomit'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `faceValue.eyesValue`            | string  | 'close', 'cry', 'default', 'dizzy', 'eyeroll', 'happy','hearts', 'side', 'squint', 'surprised', 'wink', 'winkWacky'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `faceValues.eyeBrowValue`        | string  | 'angry', 'angryNatural', 'default', 'defaultNatural', 'flatNatural','raisedExcited', 'raisedExcitedNatural', 'sadConcerned', 'sadConcernedNatural','uniBrowNatural', 'upDown', 'upDownNatural'                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `skinValue`                      | string  | #000000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `topValues.topValue`             | string  | 'eyepatch', 'hat', 'hijab', 'longHairBigHair', 'longHairBob', 'longHairBun','longHairCurly', 'longHairCurvy', 'longHairDreads', 'longHairFrida', 'longHairFro','longHairFroBand', 'longHairMiaWallace', 'longHairNotTooLong', 'longHairShavedSides','longHairStraight', 'longHairStraight2', 'longHairStraightStrand', 'noHair','shortHairDreads01', 'shortHairDreads02', 'ShortHairFrizzle', 'shortHairShaggyMullet','shortHairShortCurly', 'shortHairShortFlat', 'shortHairShortRound', 'shortHairShortWaved','shortHairSides', 'shortHairTheCaesar', 'shortHairTheCaesarSidePart', 'turban','winterHat1', 'winterHat2', 'winterHat3', 'winterHat4', 'shortHairShaggy' |
| `topValues.accessoriesValue`     | string  | 'blank', 'kurt', 'prescription01', 'prescription02', 'round', 'sunglasses', 'wayfarers'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `topValues.facialHairValue`      | string  | 'beardLight', 'BeardMajestic', 'BeardMedium', 'Blank', 'MoustacheFancy', 'MoustacheMagnum'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `topValues.facialHairColorValue` | string  | #000000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `topValues.hairColorValue`       | string  | #000000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
