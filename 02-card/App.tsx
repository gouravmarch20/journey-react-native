import { View, Text , ScrollView ,SafeAreaView } from 'react-native'
import React from 'react'
import TextCard from './components/FlatCard'
import HorizontalScrollCard from './components/HorizontalScrollCard'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TextCard/>
        <HorizontalScrollCard/>
        <FancyCard/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App