import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getData } from '../utils/api';
export default class DeckView extends React.Component {
  render() {
    const deck = this.props.route.params.deck;
    const decks = getData();
    console.log(decks[deck]);
    return (
      <View style={styles.container}>
        <Text>{decks[deck].title}</Text>
        <Text>{decks[deck].questions.length}</Text>
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
