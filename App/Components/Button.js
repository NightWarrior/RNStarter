import { TouchableOpacity } from 'react-native'
import styles from './Button.styles'
import React from 'react'
import { Text } from 'react-native-paper'

const Button = props => {
  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <Text style={styles.deliveryText}>Button</Text>
    </TouchableOpacity>
  )
}

export default Button
