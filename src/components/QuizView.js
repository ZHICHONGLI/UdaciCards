import React, { Component } from 'react';
import { View, Text } from 'react-native';
class QuizView extends Component {
  render() {
    const {title, questions} = this.props.navigation.state.params;
    return (
      <View>
        <Text>{title}</Text>
        <Text>{questions.length}</Text>
      </View>
    );
  }
}

export default QuizView;