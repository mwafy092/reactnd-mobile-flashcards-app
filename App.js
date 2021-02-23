import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { purple, white } from './utils/colors';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='DeckList'
          component={DeckList}
          options={{
            tabBarLabel: 'Decks',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name='cards' size={30} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name='AddDeck'
          component={AddDeck}
          options={{
            tabBarLabel: 'Add Deck',
            tabBarIcon: ({ color }) => (
              <FontAwesome name='plus-square' size={30} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
