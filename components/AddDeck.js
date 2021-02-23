import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { saveDeckTitle } from '../utils/api';
import { addDeck } from '../actions';
import { add } from 'react-native-reanimated';

export default class AddDeck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add Deck Component</Text>
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
