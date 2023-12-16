import {Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'

export default function FancyCard () {
  return (
    <View>
      <Text style={styles.headingText}>Treding Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQZA8s3i80S9sJnQwPMBucnYOuPjOsPWuuWKP272agfS60vRU_0o1Vzv_6W03OySwua1OyWOjO2wlK9hVL2lzOgQ',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa mahal</Text>
          <Text style={styles.cardSubTittle}>Green city</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium necessitatibus ut iusto.
          </Text>
          <Text style={styles.cardFooter}>Lorem ipsum dolor sit amet.</Text>
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
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#35BDD0',
    elevation: 3,
    shadowOffset: {
        width: 1,
        height: 1
    }
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    paddingHorizontal: 8,
    flex: 1,
    flexGrow: 1,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubTittle: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize : 12 ,
    marginBottom: 12,
    marginTop: 6,

  },
  cardFooter: {
    color: '#000000',
  },
})
