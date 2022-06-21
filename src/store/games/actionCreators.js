import { SET_GAMES } from "./actionTypes";


export function setGames(games) {
    return {
        type: SET_GAMES,
        payload: games
    };
}