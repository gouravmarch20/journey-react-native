import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';

const App = () => {
  // const isDarkMode = useColorScheme() === 'light';
  const isDarkMode = useColorScheme();
  console.log(isDarkMode)
  return (

      <View style={styles.container}>
      
        <Text style={isDarkMode ? styles?.whiteText : styles?.blackText} >
          Defalt theme of user is :: {isDarkMode}
        </Text>
        <Text style={styles?.redText}>React hello</Text>
        <Text style={styles.whiteText}>React hello</Text>
        <Text style={styles.yellowText}>React hello</Text>
        <View>
        <Text style={styles.greenText}>React hello</Text>
        <Text style={styles.greenText}>React hello</Text>

        </View>
      </View>

  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000000c0',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  blackText: {
    color: '#FFFFFF',
  },
  redText: {
    color: 'red',
  },
  greenText: {
    color: 'green',
  },
  yellowText: {
    color: 'yellow',
  },
});

export default App;
