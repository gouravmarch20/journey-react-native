import React from 'react'
import {StyleSheet, Text, View, useColorScheme} from 'react-native'

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles?.whiteText : styles?.darkText}>
        React hello
      </Text>
      <Text style={styles?.whiteText}>React hello</Text>
      <Text style={styles.whiteText}>React hello</Text>
      <Text style={styles.darkText}>React hello</Text>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
})
export default App
