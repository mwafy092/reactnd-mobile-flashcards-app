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
  };
  render() {
    const questionNumber = this.state.questionNumber;
    const decks = this.props.decks;
    const deck = this.props.route.params.deck;
    const number = this.state.questionNumber + 1;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.questions}>
            {number} / {decks[deck].questions.length}
          </Text>
          <Text style={styles.mainText}>
            {decks[deck].questions[questionNumber].question}
          </Text>
          <Info text={'show answer'} style={styles.answer}></Info>
          <ActionButton styles={styles} text={'Correct'} color={green} />
          <ActionButton styles={styles} text={'Incorrect'} color={red} />
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
