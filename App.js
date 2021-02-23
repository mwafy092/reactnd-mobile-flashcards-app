import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import DeckView from './components/DeckView';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { createStore } from 'redux';

const store = createStore(reducer);
const Tabs = createBottomTabNavigator();

// const Stack = createStackNavigator();
const DeckListStack = createStackNavigator();
const AddDeckStack = createStackNavigator();
// const DeckViewStack = createStackNavigator();

const DeckListScreen = () => (
  <DeckListStack.Navigator>
    <DeckListStack.Screen
      name='DeckList'
      component={DeckList}
      options={{ title: 'Deck List' }}
    />
    <DeckListStack.Screen
      name='DeckView'
      component={DeckView}
      options={{ title: 'Deck Info' }}
    />
  </DeckListStack.Navigator>
);
const AddDeckScreen = () => (
  <AddDeckStack.Navigator>
    <AddDeckStack.Screen
      name='AddDeck'
      component={AddDeck}
      options={{ title: 'Add Deck' }}
    />
  </AddDeckStack.Navigator>
);

const DeckViewScreen = () => (
  <DeckViewStack.Navigator></DeckViewStack.Navigator>
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen
            name='DeckList'
            component={DeckListScreen}
            options={{
              tabBarLabel: 'Deck List',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name='cards' color={color} size={26} />
              ),
            }}
          />
          <Tabs.Screen
            name='AddDeck'
            component={AddDeckScreen}
            options={{
              tabBarLabel: 'Deck List',
              tabBarIcon: ({ color }) => (
                <FontAwesome name='plus-square' color={color} size={26} />
              ),
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
