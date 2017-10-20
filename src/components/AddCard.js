import React, { Component } from 'react';
import {Alert, Text, View, KeyboardAvoidingView,TouchableOpacity, TextInput, Button} from 'react-native';
import styles from '../utils/styles';
import {connect} from 'react-redux';
import {addCard} from '../actions/Card';
import {submitEntry} from '../utils/api';

class AddCard extends Component {
  state = {
    questionInput: '',
    answerInput: ''
  };
  saveCard = () => {
    let {title, questions} = this.props.navigation.state.params;
    const {questionInput, answerInput} = this.state;
    this.props.dispatch(addCard({title, questions, question:questionInput, answer:answerInput}));

    const newQuestions = [...questions, {question: questionInput, answer: answerInput}];
    const entry = {title: title, questions: newQuestions};
    submitEntry({key: title, entry: {title: title, questions: newQuestions}});

    this.setState({
      questionInput: '',
      answerInput: ''
    });
    this.props.navigation.goBack();
  };
  render() {
    const {questionInput, answerInput} = this.state;
    return (
      <KeyboardAvoidingView style={styles.AddCardContainer}>
        <Text style={styles.AddCardText}>Qustion:</Text>
        <TextInput
          style={styles.AddCardInput}
          value={this.state.questionInput}
          onChangeText={text => this.setState({questionInput: text})}
        />
        <Text style={styles.AddCardText}>Answer:</Text>
        <TextInput
          style={styles.AddCardInput}
          value={this.state.answerInput}
          onChangeText={text => this.setState({answerInput: text})}
        />
        <Button
          title='Add'
          onPress={this.saveCard}
          disabled={!(questionInput&&answerInput)}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default connect()(AddCard);