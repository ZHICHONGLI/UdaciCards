import React, { Component } from 'react';
import {Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import {connect} from 'react-redux';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import {receiveDecks, removeDeck} from '../actions/Deck';
import {fetchCardResults} from '../utils/api';
import styles from '../utils/styles';


class Main extends Component {

  componentDidMount() {
    fetchCardResults().then(results => 
      this.props.receiveDecks(results)
    );
  }
  
  renderItem({item}) {
    return
    <View>
      {console.log(item)}
      <Text>{item.title}</Text>
      <Text>{item.questuons.length} cards</Text>
    </View>
  }

  render() {

    const {Decks} = this.props;
    // console.log(decks);
    console.log(this.props);
    return (
      <View>
        <FlatList
          data={Decks}
          renderItem={({item})=>this.renderItem({item})}
        />
        <Text>AAA</Text>
      </View>
    );
  }
}

function mapStateToProps (state){
  return{
    Decks: state.Deck
  }
}

export default connect(
  mapStateToProps,
  {receiveDecks, removeDeck}
)(Main);