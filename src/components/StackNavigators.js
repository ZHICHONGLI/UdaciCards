import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Main from './Main';
import NewDeck from './NewDeck';
import DeckView from './DeckView';
import AddCard from './AddCard';
import QuizView from './QuizView';
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
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: {
      header: null
    }
  }
});

export default StackNavigators;