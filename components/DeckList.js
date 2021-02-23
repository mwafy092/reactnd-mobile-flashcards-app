import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { getData } from '../utils/api';
import { getDecks } from '../utils/api';
import { connect } from 'react-redux';
import { receiveDecks } from '../actions';
import { orange } from '../utils/colors';
class DeckList extends React.Component {
  componentDidMount() {
    getDecks().then((decks) => this.props.receiveAllDecks(decks));
  }

  render() {
    const { decks } = this.props;
    console.log(this.props);
    return (
      <ScrollView>
        {Object.keys(decks).map((deck) => {
          const { title, questions } = decks[deck];

          return (
            <View key={title} style={styles.card}>
              <Text style={styles.text}>{title}</Text>
              <Text style={styles.text}>{questions.length}</Text>
              <Button
                style={styles.submitBtn}
                title='show deck'
                onPress={() =>
                  this.props.navigation.push('DeckView', { deck })
                }></Button>
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 5,
    backgroundColor: '#DDD',
    width: 200,
    height: 100,
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    display: 'flex',
    textAlign: 'center',
    color: '#333',
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
