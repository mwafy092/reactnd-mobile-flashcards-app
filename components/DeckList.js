import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { getData } from '../utils/api';
import { getDecks } from '../utils/api';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';
class DeckList extends React.Component {
  componentDidMount() {
    getDecks().then((decks) => this.props.receiveAllDecks(decks));
  }

  render() {
    const { decks } = this.props;
    console.log(this.props);
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

function mapDispatchToProps(dispatch) {
  return {
    receiveAllDecks: (decks) => dispatch(receiveDecks(decks)),
  };
}
function mapStateToProps(decks) {
  return {
    decks,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
