import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { saveDeckTitle } from '../utils/api';
import { addDeck } from '../actions';
import { add } from 'react-native-reanimated';

export default class AddDeck extends React.Component {
  render() {
    return (
      <View>
        <Text>Add Deck Component</Text>
      </View>
    );
  }
}
