import {ADD_CARD} from '../actions/Card';
import {ADD_DECK, RECEIVE_DECKS} from '../actions/Deck';

function Decks(state={}, action) {
  switch (action.type) {
    case ADD_DECK:
      return {...state, ...action.deck};
    case RECEIVE_DECKS:
      return {...state, ...action.decks}
    default:
    return state
  }
}

export default Decks;