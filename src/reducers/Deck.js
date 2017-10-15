import {ADD_DECK} from '../actions/Deck';

function deck(state={}, action) {
  switch (action.type) {
    case ADD_DECK:
      return state;
    default:
    return state
  }
}

export default deck;