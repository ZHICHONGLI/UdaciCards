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
import QuizView from './QuizView';
import styles from '../utils/styles';
import {Ionicons} from '@expo/vector-icons';
import {setLocalNotification} from '../utils/_card';
import StackNavigators from './StackNavigators';

class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
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