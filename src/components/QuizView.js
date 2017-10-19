import React, { Component } from 'react';
import { Alert, View, Text, Button, TouchableOpacity } from 'react-native';
import styles from '../utils/styles';
class QuizView extends Component {
  state = {
    index: 0,
    isAnsShow: false,
    count: 0
  };
  correct = () => {
    const {index, count} = this.state;
    this.setState({
      count: count +1,
      isAnsShow: false,
      index: index + 1
    })
  };
  incorrect() {
    this.setState(
      {
        isAnsShow: false,
        index: this.state.index + 1
      }
    )
  };
  render() {
    const {title, questions} = this.props.navigation.state.params;
    const {index, count, isAnsShow} = this.state;
    return (
      <View>
        {index < questions.length &&
          <View style={styles.QuizViewContainer}>
            <Text style={styles.DeckViewTitle}>Quiz of {title}</Text>
            <Text>{index+1} of {questions.length}</Text>
            <View style={styles.QuizQuestion}>
              <Text style={styles.QuizBody}>
                {!isAnsShow ?
                  questions[index].question :
                  questions[index].answer
                }
              </Text>
              <Button 
                title={`${isAnsShow? 'hide' : 'show'} ans`}
                onPress={()=>this.setState({isAnsShow: !isAnsShow})}
              />
            </View>
            <TouchableOpacity style={styles.QuizBtnC}>
              <Button color='#2fa311' title='Correct' onPress={this.correct.bind(this)}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.QuizBtnW}>
              <Button title='Incorrect' color='#b71845' onPress={this.incorrect.bind(this)}/>
            </TouchableOpacity>
          </View>
        }
        {
          index === questions.length && 
          <View style={styles.QuizViewContainer}>
            <Text style={styles.DeckViewTitle}>Quiz of {title}</Text>
            <Text style={styles.QuizRate}>Correct Rate: {count}/{questions.length}</Text>
            <TouchableOpacity style={styles.QuizBtnC}>
              <Button 
                title='Back'
                onPress={()=>this.props.navigation.goBack()}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.QuizBtnW}>
              <Button
                title='Redo'
                onPress={()=>this.setState({index: 0, count: 0})}
              />
            </TouchableOpacity>
          </View>
        }        
      </View>
    );
  }
}

export default QuizView;