import {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';

export default function App() {
  const [randomBg, setRandomBg] = useState('#ffffff');
  const onPress = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    console.log(99, color);
    setRandomBg(color);
  };

  return (
    <SafeAreaView >
      <StatusBar animated={true} backgroundColor={randomBg} />
      <View style={styles.heading}>
      <Text style={styles.headingText}>Color change & status - dynamic </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, {backgroundColor: randomBg}]}
        onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    display:'flex',
    justifyContent: 'center',
    alignItems : 'center',
    height : 80
  },
  headingText:{
    color : 'green',
    fontSize  : 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop : 10,

    width : "60%"
  },
});
