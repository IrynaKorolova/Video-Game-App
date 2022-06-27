import { SET_GAMES, ADD_GAME, ADD_GAMES } from "./actionTypes";

const initialState = [];

export function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GAMES:
      return action.payload;
    case ADD_GAMES:
      return [...state, ...action.payload];
    case ADD_GAME:
      return [...state, action.payload];
    default:
      return state;
  }
}
