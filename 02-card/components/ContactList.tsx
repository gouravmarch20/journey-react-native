import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native'
import React from 'react'

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ]
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.headingText}>Contact list</Text>
        <ScrollView style={styles.container}>
          {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
              <Image
                style={styles.userImg}
                source={{
                  uri: imageUrl,
                }}
              />
              <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: '500',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor : 'green',
    marginBottom : 6,
    borderRadius : 4,
    padding : 8,
    width:'100%'
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight : 16
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFF'
  },
  userStatus: {
    color: 'white ',
  },
})
export default ContactList
