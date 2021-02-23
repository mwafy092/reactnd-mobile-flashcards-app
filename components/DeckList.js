import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { getData } from '../utils/api';
import { DeckView } from './DeckView';
export default class DeckList extends React.Component {
  render() {
    const decks = getData();

    return (
      <View style={styles.container}>
        {Object.keys(decks).map((deck) => {
          const { title, questions } = decks[deck];

          return (
            <View key={title}>
              <Text>{title}</Text>
              <Text>{questions.length}</Text>
              <Button
                title='show deck'
                onPress={() =>
                  this.props.navigation.push('DeckView', { deck })
                }></Button>
            </View>
          );
        })}
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
