import {View, Text, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElavatedCard from './components/ElavatedCard'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {/* <Text>App</Text> */}
          <FlatCard />
          <ElavatedCard />
          <FancyCard />
          <FancyCard />
          <ActionCard />
          <ContactList />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
