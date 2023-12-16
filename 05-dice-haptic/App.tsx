import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Dice from './components/Dice';

export default function App() {
  return (
    <View>
      <Text>
        <Dice />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
