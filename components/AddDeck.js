import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import { saveDeckTitle } from '../utils/api';
import { addDeck } from '../actions';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton';
import { orange } from '../utils/colors';
class AddDeck extends React.Component {
  state = {
    text: '',
  };

  submitName = () => {
    console.log(this.props.navigation);
    const { text } = this.state;
    saveDeckTitle(text);
    this.props.dispatch(addDeck(text));
    this.props.navigation.navigate('DeckView', {
      screen: 'DeckView',
      deck: text,
    });
    this.setState({ text: '' });
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View>
          <Text style={styles.title}>What is the new decks name ?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}></TextInput>
          <SubmitButton
            onPress={this.submitName}
            title='submit'
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
    alignItems: 'center',
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50,
    borderRadius: 8,
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
    width: 150,
    display: 'flex',
    alignSelf: 'center',
    margin: 10,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});

export default connect()(AddDeck);
