import React, { Component } from 'react';
import {Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import {connect} from 'react-redux';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import {receiveDecks} from '../actions/Deck';
import {fetchCardResults} from '../utils/api';
import styles from '../utils/styles';


class Main extends Component {

  componentDidMount() {
    fetchCardResults().then(results => 
      this.props.receiveDecks(results)
    );
  }
  
  _renderItem = ({item}) => (    
    <View style={styles.deckItem}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('DeckView', item)}>
        <Text style={styles.deckHeader}>{item.title}</Text>
        <Text style={styles.deckBody}>{item.questions.length} cards</Text>
      </TouchableOpacity>
      
    </View>
  );

  render() {

    const {Decks} = this.props;
    const _Decks = Object.keys(Decks).reduce((result, id) => {
      result.push(Decks[id]);
      return result
    }, []);
    return (
      <View>
        <FlatList
          data={_Decks}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index}
          style={styles.FlatList}
        />
      </View>
    );
  }
}

function mapStateToProps (state){
  return{
    Decks: state
  }
}

export default connect(
  mapStateToProps,
  {receiveDecks}
)(Main);