import React from 'react';
import {Text ,View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {StackNavigator} from 'react-navigation';
import reducer from '../reducers';
import Main from './Main';

const Navigation = StackNavigator({
  Main: {
    screen: Main,
    mnvigationOptions: {
      header: null
    }
  }
});

class App extends React.Component {
  componentDidMount () {
    // setLocalNotification()
  }

  render () {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <StatusBar />
          <Navigation />
        </View>
      </Provider>
    )
  }
}

export default App