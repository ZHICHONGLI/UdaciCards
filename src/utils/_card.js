import {AsyncStorage} from 'react-native';
import { Notifications, Permissions } from 'expo';

export const CARD_STORAGE_KEY = 'UdaciCards:card';
export const NOTIFICATION_KEY = 'UdaciCards:notifications';

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

function createNotification () {
  return {
    title: 'Go Study',
    body: 'Go Quiz',
    ios: {
      sound: true,
    },
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  };
}

export function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync
  );
}

export function setLocalNotification () {
  console.disableYellowBox = true;
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            let tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(20);
            Notifications.scheduledLocalNotificationsAsync(
              createNotification(),
              {
                time: tomorrow,
                repeat: 'day'
              }
            );s
            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
          }
        })
      }
    })
  }