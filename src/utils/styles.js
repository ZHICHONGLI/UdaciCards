import {StyleSheet, Dimensions} from 'react-native';
import {Constants} from 'expo';

export const purple = '#292477'
export const gray = '#e8edf4'
export const white = '#fff'
export const red = '#b71845'
export const orange = '#f26f28'
export const blue = '#4e4cb8'
export const lightPurp = '#7c53c3'
export const pink = '#b93fb3'
export const black = '#000000'
export const lightBlue = '#dbe8f9'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightBlue
  },
  StatusBar: {
    height: Constants.statusBarHeight,
    backgroundColor: gray
  },

  // NewDeck styles
  addView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addText: {
    fontSize: 25,
    color: orange
  },
  addInput: {
    width: 300,
    height: 50,
    margin: 15,
    padding: 5,
    borderColor: orange,
    borderWidth: 2,
    borderRadius: 5
  },

  // Main View
  deckItem: {
    margin: 10,
    padding: 10,
    backgroundColor: gray,
    borderRadius: 5,
    borderColor: orange,
    borderWidth: 1,
    justifyContent: 'center'
  },
  deckHeader:{
    fontSize: 22
  },
  deckBody: {
    color: lightPurp
  },
  FlatList: {
    paddingBottom: 200
  },

  // DeckView
  DeckViewContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
    },
  DeckViewTitle: {
    fontSize: 30,
    color: lightPurp
  },
  DeckViewQues: {
    paddingTop:5,
    fontSize: 15
  },
  DeckViewActions: {
    flex: 1,
    marginTop: 150,
    flexDirection: 'row'
  },
  DeckViewBtn: {
    margin: 50
  },

  // AddCard View
  AddCardContainer: {
    padding: 10,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  AddCardText: {
    fontSize: 20
  },
  AddCardInput: {
    width: 300,
    height: 50,
    margin: 15,
    padding: 5,
    borderColor: orange,
    borderWidth: 2,
    borderRadius: 5
  }


});