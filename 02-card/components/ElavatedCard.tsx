import {StyleSheet, Text, View, ScrollView} from 'react-native'
import React from 'react'

export default function ElavatedCard () {
  return (
    <View>
      <Text style={styles.headingText}>ElavatedCard</Text>
      <ScrollView horizontal>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text>hi</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text>hi</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text>hi</Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
            <Text>hi</Text>
          </View>
          <View style={[styles.card, styles.cardFive]}>
            <Text>hi</Text>
          </View>
          <View style={[styles.card, styles.cardFive]}>
            <Text>hi</Text>
          </View>
        </View>
      </ScrollView>
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
    flexDirection: 'row',
    paddingHorizontal: 8,
  },
  card: {
    flex: 1,
    height: 100,
    width: 100,
    margin: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    borderRadius : 4
  },
  cardOne: {
    backgroundColor: '#50DBB4',
  },
  cardTwo: {
    backgroundColor: '#E03B8B',
  },
  cardThree: {
    backgroundColor: '#5A20CB',
  },
  cardFour: {
    backgroundColor: '#03203C',
  },
  cardFive: {
    backgroundColor: '#2827CC',
  },
})
