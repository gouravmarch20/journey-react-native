import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function FlatCard () {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text> hello</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text> hello</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text> hello</Text>
        </View>
       
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: '500',
    paddingHorizontal: 8

  },
  container: {
    // flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    // flex : 1 ,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius : 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#FF6263',
  },
  cardTwo: {
    backgroundColor: '#3944F7',
  },
  cardThree: {
    backgroundColor: '#50DBB4',
  },
})
