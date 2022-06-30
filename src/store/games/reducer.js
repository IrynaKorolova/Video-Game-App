import {
  SET_GAMES,
  ADD_GAME,
  ADD_GAMES,
  SET_GAMES_LOADING,
  SET_GAMES_ERROR,
  SET_GAMES_LOADED,
} from "./actionTypes";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_GAMES_LOADING:
      return { ...state, loading: true, error: null };
    case SET_GAMES_LOADED:
      return { ...state, loading: false };
    case SET_GAMES_ERROR:
      return { ...state, error: action.payload };
    case SET_GAMES:
      return { ...state, data: action.payload };
    case ADD_GAMES:
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    case ADD_GAME:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
}
