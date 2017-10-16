import React, { Component } from 'react';
import {Alert, Button, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {addDeck} from '../actions/Deck';
import styles, {orange} from '../utils/styles';
import {submitEntry} from '../utils/api';

class NewDeck extends Component {
  state = {
    input: ''
  };
  addDeck = () => {
    const {decks} = this.props;
    // console.log(this.state.input);
    // console.log(decks);
    const {input} = this.state;
    if(decks[input]){
      return Alert.alert('Duplicate Deck! Please use other names.')
    }
    this.props.dispatch(addDeck(input));
    submitEntry({
      key: input,
      entry: {
        title: input,
        questions: []
      }
    });
    this.props.navigation.navigate('DeckView', {title: input});
    this.setState({input: ''});
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
          disabled={!this.state.input}
        />
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state
  }
}
export default connect(mapStateToProps)(NewDeck);