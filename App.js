import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, StackView } from '@react-navigation/stack';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { Constants } from 'expo';
import DeckList from './components/DeckList';
import AddDeck from './components/AddDeck';
import DeckView from './components/DeckView';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { createStore } from 'redux';
import AddCard from './components/AddCard';
import { back } from 'react-native/Libraries/Animated/src/Easing';
import { purple } from './utils/colors';
import Quiz from './components/Quiz';
const store = createStore(reducer);
const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();
const DeckListStack = createStackNavigator();
const AddDeckStack = createStackNavigator();

function NewStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor: purple }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

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
    <DeckListStack.Screen
      name='AddCard'
      component={AddCard}
      options={{ title: 'Add Card' }}
    />
    <DeckListStack.Screen
      name='Quiz'
      component={Quiz}
      options={{ title: 'Quiz' }}
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

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NewStatusBar backgroundColor={purple} barStyle='light-content' />
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
