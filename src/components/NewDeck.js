import React, { Component } from 'react';
import {Alert, Button, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {ADD_DECK} from '../actions/Deck';
import styles, {orange} from '../utils/styles';

class NewDeck extends Component {
  state = {
    input: ''
  };
  addDeck = () => {
    const {decks} = this.props;
    console.log(this.state.input);
    console.log(decks);
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.addView}>
        <Text style={styles.addText}>Add A New Deck</Text>
        <TextInput
          value={this.state.input}
          style={styles.addInput}
          onChangeText={text => this.setState({input:text})}
        />
        <Button
          title='Add'
          color={orange}
          style={styles.addBtn}
          onPress={this.addDeck}
        />
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.deck
  }
}
export default connect(mapStateToProps)(NewDeck);