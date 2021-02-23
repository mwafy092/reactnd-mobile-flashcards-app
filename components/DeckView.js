import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getData } from '../utils/api';
import { connect } from 'react-redux';
import ActionButton from './ActionButton';
import { purple, white, red } from '../utils/colors';
class DeckView extends React.Component {
  render() {
    const deck = this.props.route.params.deck;

    const { decks } = this.props;
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 30 }}>{decks[deck].title}</Text>
        <Text style={{ color: 'red', fontSize: 18, margin: 10 }}>
          {decks.questions ? decks[deck].questions.length : 'empty deck'}
        </Text>
        <ActionButton
          color={purple}
          styles={styles}
          text={'Add Card'}
          onPress={() => this.props.navigation.navigate('AddCard', { deck })}
        />
        <ActionButton
          color={red}
          styles={styles}
          text={'Add Card'}
          onPress={() => this.props.navigation.navigate('Quiz', { deck })}
        />
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
  iosBtn: {
    padding: 10,
    borderRadius: 7,
    height: 45,
    margin: 10,
    width: 170,
  },
  submitBtnText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
  },
});

function mapStateToProps(decks) {
  return {
    decks,
  };
}

export default connect(mapStateToProps)(DeckView);
