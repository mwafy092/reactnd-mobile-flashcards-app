import React from 'react';
import { NavigationAction } from '@react-navigation/native';
import { orange, white, purple } from '../utils/colors';
import { addCardToDeck } from '../utils/api';
import { connect } from 'react-redux';
import { addCard } from '../actions';
import SubmitButton from './SubmitButton';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';

class AddCard extends React.Component {
  state = {
    questions: '',
    answer: '',
    correctAnswer: '',
  };
  submitCard = (deck) => {
    const { question, answer, correctAnswer } = this.state;
    if (question && answer) {
      this.props.dispatch(addCard({ question, answer, correctAnswer, deck }));
      addCardToDeck(deck, { question, answer, correctAnswer });
      this.setState({ question: '', answer: '', correctAnswer: '' });
      this.props.navigation.navigate('DeckView');
    }
  };
  render() {
    const deckName = this.props.route.params.deck;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>What is the question?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(question) => this.setState({ question })}
            value={this.state.question}></TextInput>
          <Text style={styles.title}>What is the answer?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(answer) => this.setState({ answer })}
            value={this.state.answer}></TextInput>
          <Text style={styles.title}>Is that true or false?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(correctAnswer) => this.setState({ correctAnswer })}
            value={this.state.correctAnswer}></TextInput>
          <SubmitButton
            style={styles.submitBtn}
            onPress={() => this.submitCard(deckName)}
            style={styles.submitBtn}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  title: {
    fontSize: 25,
    color: '#444',
    textAlign: 'center',
  },
  submitBtn: {
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
    backgroundColor: orange,
    borderRadius: 7,
    overflow: 'hidden',
    width: 150,
    display: 'flex',
    alignSelf: 'center',
    margin: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  input: {
    width: 250,
    height: 35,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 10,
    borderRadius: 7,
    display: 'flex',
    alignSelf: 'center',
  },
});

export default connect()(AddCard);
