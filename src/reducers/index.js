import {ADD_CARD} from '../actions/Card';
import {ADD_DECK, RECEIVE_DECKS} from '../actions/Deck';

function Decks(state={}, action) {
  switch (action.type) {
    case ADD_DECK:
      const {deck_title} = action;
      state = {
        ...state,
        [deck_title]: {
          title: deck_title,
          questions: []
        }
      }
      return state;
    case RECEIVE_DECKS:
      return {...state, ...action.decks};
    case ADD_CARD:
      const {title, questions, question, answer} = action;
      

      state = {
        ...state,
        [title]: {...state[title], questions: [...questions, {question: question, answer: answer}]}
      }
      return state;
    default:
    return state
  }
}

export default Decks;