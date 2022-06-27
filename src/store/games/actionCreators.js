import { SET_GAMES, ADD_GAME, ADD_GAMES } from "./actionTypes";

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
