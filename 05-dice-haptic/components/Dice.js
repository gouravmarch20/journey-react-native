import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';
//
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
export default function Dice() {
  const [diceImage, setDiceImage] = useState(DiceOne);

  const rollDiceOnTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;

      default:
        setDiceImage(DiceOne);
        break;
    }

    ReactNativeHapticFeedback.trigger('impactLight', options);
  };
  return (
    <View>
      <Image style={styles.diceImage} source={diceImage} />

      <Pressable onPress={rollDiceOnTap}>
        <Text
        // style={styles.rollDiceBtnText}
        >
          Roll the dice
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
