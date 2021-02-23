import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { orange, white, purple, red, green } from '../utils/colors';
import SubmitButton from './SubmitButton';
import { connect } from 'react-redux';
import ActionButton from './ActionButton';
import Info from './Info';
class Quiz extends React.Component {
  state = {
    questionNumber: 0,
    showQuestion: false,
    correct: 0,
    incorrect: 0,
  };

  showAnswer = () =>
    !this.state.showQuestion
      ? this.setState({ showQuestion: true })
      : this.setState({ showQuestion: false });

  submitAnswer = (answer) => {
    const { questionNumber } = this.state;
    const deck = this.props.route.params.deck;
    const decks = this.props.decks;
    const correct = decks[deck].questions[
      questionNumber
    ].correctAnswer.toLowerCase();

    if (answer === correct) {
      this.setState({ correct: this.state.correct + 1 });
    } else {
      this.setState({ incorrect: this.state.incorrect + 1 });
    }
    this.setState({
      questionNumber: this.state.questionNumber + 1,
      showQuestion: false,
    });
  };
  render() {
    const questionNumber = this.state.questionNumber;
    const decks = this.props.decks;
    const deck = this.props.route.params.deck;
    console.log(deck);
    const number = this.state.questionNumber + 1;

    if (questionNumber === decks[deck].questions.length) {
      return (
        <View style={styles.container}>
          <View style={styles.card}>
            <Text styles={styles.mainText}>
              You got {this.state.correct} out of {decks[deck].questions.length}
              !
            </Text>
            {this.state.correct > this.state.incorrect ? (
              <Text style={{ fontSize: 60 }}>🦸‍♂️</Text>
            ) : (
              <Text style={{ fontSize: 60 }}>😢</Text>
            )}
            <ActionButton styles={styles} text={'Try again'} color={red} />
            <ActionButton styles={styles} text={'Back'} color={green} />
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.questions}>
            {number} / {decks[deck].questions.length}
          </Text>
          {this.state.showQuestion ? (
            <Text style={styles.mainText}>
              {decks[deck].questions[questionNumber].answer}
            </Text>
          ) : (
            <Text style={styles.mainText}>
              {decks[deck].questions[questionNumber].question}
            </Text>
          )}
          {!this.state.showQuestion ? (
            <Info
              text={'show answer'}
              style={styles.answer}
              onPress={this.showAnswer}></Info>
          ) : (
            <Info
              text={'show question'}
              style={styles.answer}
              onPress={this.showAnswer}></Info>
          )}

          <ActionButton
            styles={styles}
            text={'Correct'}
            color={green}
            onPress={() => this.submitAnswer('true')}
          />
          <ActionButton
            styles={styles}
            text={'Incorrect'}
            color={red}
            onPress={() => this.submitAnswer('false')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iosBtn: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin: 5,
    width: 160,
  },
  submitBtnText: {
    color: '#444',
    fontSize: 26,
    textAlign: 'center',
  },
  questions: {
    top: 0,
    alignSelf: 'flex-start',
    left: 0,
    top: 0,
    color: '#444',
    fontSize: 20,
    margin: 5,
    position: 'absolute',
  },
  answer: {
    color: '#444',
    fontSize: 20,
    margin: 20,
  },
  card: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    alignSelf: 'stretch',
  },
  mainText: {
    fontSize: 35,
    color: '#444',
    marginTop: 40,
    textAlign: 'center',
  },
});

function mapStateToProps(decks) {
  return {
    decks,
  };
}
export default connect(mapStateToProps)(Quiz);
