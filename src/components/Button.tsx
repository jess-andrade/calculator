// -- Imports 
import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight
} from 'react-native'

// --
type ButtonProps = {
  onClick: any,
  label: String,
}

// -- Styles 
const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },
  opButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 2,
  }
})

export default function Button({ onClick, label }: ButtonProps) {

  return (
    <TouchableHighlight onPress={onClick}>
      <Text style={styles.button}>
        {label}
      </Text>
    </TouchableHighlight>
  )
}
