import {AsyncStorage} from 'react-native';

export const CARD_STORAGE_KEY = 'UdaciCards:card';

function setDummyData () {
  const dummyData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces',
          result: null
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event',
          resuilt: null
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.',
          result: null
        }
      ]
    }
  };

  AsyncStorage.setItem(CARD_STORAGE_KEY, JSON.stringify(dummyData));
  return dummyData;
}

export function formatCardResults (results) {
  return results === null
    ? setDummyData()
    : JSON.parse(results)
}