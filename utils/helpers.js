import React from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

const NOTIFICATIONS_KEY = 'flashcards: notifications';

function createNotification() {
  return {
    title: 'Please Study',
    body: 'do not forget to study today',
    ios: {
      sound: true,
    },
  };
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATIONS_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();
            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            tomorrow.setMinutes(0);
            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: tomorrow,
              repeat: 'day',
            });
            AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(true));
          }
        });
      }
    });
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATIONS_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}
export const getCardsLength = (questions) => {
  if (questions.length === 0) {
    return <Text>0 cards</Text>;
  } else if (questions.length > 1) {
    return <Text>{questions.length} cards</Text>;
  } else {
    return <Text>1 card</Text>;
  }
};
