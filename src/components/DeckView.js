import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableOpacity, Button} from 'react-native';
import styles from '../utils/styles';

class DeckView extends Component {
  render() {
    const {Deck} = this.props;
    const {title, questions} = Deck;
    return (
      <View style={styles.DeckViewContainer}>
        <Text style={styles.DeckViewTitle}>{title}</Text>
        <Text style={styles.DeckViewQues}>{questions.length} cards</Text>
        <View style={styles.DeckViewActions}>
          <View style={styles.DeckViewBtn}>
            <Button
              title='Quiz'
              onPress={() => {
                this.props.navigation.navigate('Quiz', {title, questions})
              }}
            />
          </View>
          <View style={styles.DeckViewBtn}>
            <Button
              title='Add Card'
              onPress={() => {
                this.props.navigation.navigate('AddCard', {title, questions})
              }}
            />
          </View>
          
        </View>
      </View>
    );
  }
}

function mapStateToProps(state, {navigation}) {
  const {title} = navigation.state.params
  return {
    Deck: state[title],
  };
}

export default connect(mapStateToProps)(DeckView);