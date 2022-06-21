import { getGames } from "../../api/games";
import { setGames } from "./actionCreators";

export function getGamesThunk() {
    return (dispatch, getState) => {
        const params = getState().catalogParams;
        getGames(params).then(response => {
            dispatch(setGames(response.data.results));
        } );
    }
}