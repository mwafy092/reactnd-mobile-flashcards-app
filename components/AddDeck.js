import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { saveDeckTitle } from '../utils/api';
import { addDeck } from '../actions';
import { connect } from 'react-redux';

class AddDeck extends React.Component {
  state = {
    text: '',
  };

  submitName = () => {
    const { text } = this.state;
    saveDeckTitle(text);
    this.props.dispatch(addDeck(text));
    this.props.navigation.push('DeckView', { entryId: text });
    this.setState({ text: '' });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>What is the new decks name ?</Text>
        <TextInput
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}></TextInput>
        <Button onPress={this.submitName} title='submit'></Button>
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
});

export default connect()(AddDeck);
