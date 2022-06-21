import { SET_GAMES } from "./actionTypes";


const initialState = [];

export function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GAMES:
      return action.payload;
    default:
      return state;
  }
}
