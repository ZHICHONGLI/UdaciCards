import React from 'react'
import {View, Text} from 'react-native'
import Entry from './src/components/Entry';

class App extends React.Component {

  render () {
    return (
      <View style={{flex: 1}}>
        <Entry />
      </View>
    )
  }
}

export default App