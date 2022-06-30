import {
  SET_GAMES,
  ADD_GAME,
  ADD_GAMES,
  SET_GAMES_LOADING,
  SET_GAMES_ERROR,
  SET_GAMES_LOADED,
} from "./actionTypes";

export function setGames(games) {
  return {
    type: SET_GAMES,
    payload: games,
  };
}
export function addGames(games) {
  return {
    type: ADD_GAMES,
    payload: games,
  };
}
export function addGame(game) {
  return {
    type: ADD_GAME,
    payload: game,
  };
}
export function setLoading() {
  return {
    type: SET_GAMES_LOADING,
  };
}
export function setLoaded() {
  return {
    type: SET_GAMES_LOADED,
  };
}

export function setError(error) {
  return {
    type: SET_GAMES_ERROR,
    payload: error,
  };
}
