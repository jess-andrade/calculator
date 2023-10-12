// -- Imports 
import React from 'react'
import type { PropsWithChildren } from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// -- My imports 
import Button from './components/Button';


function App(): JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Button label='AC' onClick={0} />
          <Button label='/' onClick={0} />
          <Button label='7' onClick={0} />
          <Button label='8' onClick={0} />
          <Button label='9' onClick={0} />
          <Button label='*' onClick={0} />
          <Button label='4' onClick={0} />
          <Button label='5' onClick={0} />
          <Button label='6' onClick={0} />
          <Button label='-' onClick={0} />
          <Button label='1' onClick={0} />
          <Button label='2' onClick={0} />
          <Button label='3' onClick={0} />
          <Button label='+' onClick={0} />
          <Button label='0' onClick={0} />
          <Button label='.' onClick={0} />
          <Button label='=' onClick={0} />
        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})

export default App;
