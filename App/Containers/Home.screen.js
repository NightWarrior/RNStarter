import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import styles from './Home.styles'
import { Appbar } from 'react-native-paper'
import Button from '../Components/Button'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home Screen" />
      </Appbar.Header>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        contentContainerStyle={styles.scrollView}>
        <Button />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
