import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function HorizontalScrollCard() {
  return (
    <View>
      <Text style={styles.headingText}>HorizontalScroll Card</Text>

      <ScrollView  horizontal={true} showsHorizontalScrollIndicator >
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne, styles.cardText]}>
            <Text>Red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo, styles.cardText]}>
            <Text>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardThree, styles.cardText]}>
            <Text>Sky</Text>
          </View>
          <View style={[styles.card, styles.cardFour, styles.cardText]}>
            <Text>Teal</Text>
          </View>
          <View style={[styles.card, styles.cardFive, styles.cardText]}>
            <Text>Haze</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: '500',
    paddingHorizontal: 8,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    // flexWrap: 'wrap',
  },
  card: {
    width: 100,
    height: 100,
    margin: 8,
  },
  cardText: {
    display: '1',
    justifyContent: 'center',
    alignItems: 'center',
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
  cardFour: {
    backgroundColor: '#043b5c',
  },
  cardFive: {
    backgroundColor: '#392e4a',
  },
});
