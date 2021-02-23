import React from 'react';
import { NavigationAction } from '@react-navigation/native';
import { orange, white } from '../utils/colors';
import { addCardToDeck } from '../utils/api';
import { connect } from 'react-redux';
import { addCard } from '../actions';
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
  submitCard = () => {};
  render() {
    const deckName = this.props.route.params.deck;
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}></Text>
          <TextInput
            style={styles.input}
            onChangeText={(question) => this.setState({ question })}
            value={this.state.question}></TextInput>
          <Text></Text>
          <TextInput
            style={styles.input}
            onChangeText={(answer) => this.setState({ answer })}
            value={this.state.answer}></TextInput>
          <Text></Text>
          <TextInput
            style={styles.input}
            onChangeText={(correctAnswer) => this.setState({ correctAnswer })}
            value={this.state.correctAnswer}></TextInput>
          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => this.submitCard(deckName)}>
            <Text style={styles.submitBtnText}>Submit</Text>
          </TouchableOpacity>
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
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    color: '#333',
  },
  submitBtn: {
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
    backgroundColor: orange,
    borderRadius: 7,
    overflow: 'hidden',
  },
  input: {
    width: 250,
    height: 40,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 20,
    borderRadius: 7,
  },
});

export default AddCard;
