import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openWebsite = websiteLink => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text style={styles.headingText}>Action </Text>

      <View style={[styles.card, styles?.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>What new in Javascript 21</Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          }}
          style={styles.cardImage}
        />

        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Just like every year, Javascript brings in new features. This year
            javascript is bringing 4 new features, which are almost in
            production rollout. I won't be wasting much more time and directly
            jump to code with easy to understand examples.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://blog.learncodeonline.in/whats-new-in-javascript-21-es12',
              )
            }>
            <Text style={styles.socialLinks}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/hiteshchoudharyofficial/')
            }>
            <Text style={styles.socialLinks}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: '500',
    paddingHorizontal: 8,
  },

  card: {
    height: 350,
    width: 360,
    marginHorizontal: 8,
    marginVertical: 12,
    backgroundColor: '#E07C24',

    borderRadius: 4,
  },

  //   elevatedCard: {
  //     backgroundColor: '#E07C24',
  //     elevation: 3,
  //     shadowOffset: {
  //       width: 1,
  //       height: 1,
  //     },
  //     shadowColor: '#333',
  //     shadowOpacity: 0.4,
  //   },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    height: 190,
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 6,
    borderRadius: 6,
  },
});
