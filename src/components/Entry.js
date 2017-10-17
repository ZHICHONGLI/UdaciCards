import React from 'react';
import {Text ,View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {StackNavigator, TabNavigator} from 'react-navigation';
import reducer from '../reducers';
import Main from './Main';
import NewDeck from './NewDeck';
import DeckView from './DeckView';
import AddCard from './AddCard';
import styles from '../utils/styles';
import {Ionicons} from '@expo/vector-icons';

const Navigator = TabNavigator({
  Home: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Ionicons name='ios-paper' size={30} color={tintColor} />
      )
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({tintColor}) => (
        <Ionicons name='ios-create' size={30} color={tintColor} />
      )
    }
  }
});

const StackNavigators = StackNavigator({
  Home: {
    screen: Navigator,
    navigationOptions: {header: null}
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {

    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
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
        <View style={styles.container}>
          <View style={styles.StatusBar}>
            <StatusBar translucent/>
          </View>
          <StackNavigators/>
        </View>
      </Provider>
    )
  }
}

export default App