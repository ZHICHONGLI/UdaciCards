import React, { Component } from 'react';
import {Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import {connect} from 'react-redux';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import {white} from '../utils/colors';
import {receiveDecks, removeDeck} from '../actions/Deck';
import moduleName from '../reducers/Deck';
import {fetchCardResults} from '../utils/api';


class Main extends Component {

  componentDidMount() {
    fetchCardResults().then(results => 
      receiveDecks(results)
    );
  }
  
  renderItem(item) {
    return
    <View>
      {console.log(item)}
      <Text>{item.title}</Text>
      <Text>{item.questuons.length} cards</Text>
    </View>
  }

  render() {

    const {decks} = this.props;
    console.log(decks);
    return (
      <View>
        <FlatList
          data={decks}
          renderItem={({item})=>this.renderItem(item)}
        />
        
      </View>
    );
  }
}

function mapStateToProps (decks){
  return{
    decks: decks
  }
}

export default connect(
  mapStateToProps,
  {receiveDecks, removeDeck}
)(Main);