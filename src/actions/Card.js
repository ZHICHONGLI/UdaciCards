export const ADD_CARD = 'ADD_CARD';

export function addCard({title, questions, question, answer}) {
  return {
    type: ADD_CARD,
    title,
    questions,
    question,
    answer
  }
}