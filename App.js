import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { purple, white } from './utils/colors';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';

const Tabs = TabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name='cards-outline'
            size={30}
            color={tintColor}
          />
        ),
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name='plus-square' size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: purple,
      style: {
        height: 56,
        backGround: white,
      },
    },
  }
);

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs />
    </View>
  );
}
