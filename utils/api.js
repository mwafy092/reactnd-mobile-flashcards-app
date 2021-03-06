import { appData } from './_DATA';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FLASHCARDS_STORAGE_KEY = 'flashcards: decks';

export function getData() {
  return appData;
}

export function getDecks(deck) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY).then((results) => {
    if (results === null) {
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(appData));
      return appData;
    } else {
      return JSON.parse(results);
    }
  });
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(
    FLASHCARDS_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title: title,
        questions: [],
      },
    })
  );
}

export function addCardToDeck(name, card) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => JSON.parse(results))
    .then((results) => {
      results[name].questions.push(card);
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(results));
      return results;
    });
}
