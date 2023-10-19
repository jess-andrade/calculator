// -- Imports 
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
  View
} from 'react-native'
import Button from './Button'

// --
type DisplayProps = {
  value: String | number,
}

// -- Styles
const styles = StyleSheet.create({
  display: {
    flex: 1,
    padding: 60,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    flexDirection: 'row',
  },
  displayValue: {
    fontSize: 60,
    color: 'red',
  },
})

export default function Display({ value }: DisplayProps) {
  return (
    <View style={styles.display}>
      <Text style={styles.displayValue}>
        {value}
      </Text>
    </View>
  )
}