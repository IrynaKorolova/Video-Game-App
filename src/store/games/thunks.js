import { getGames } from "../../api/games";
import { setGames, addGames } from "./actionCreators";

export function getGamesThunk() {
  return (dispatch, getState) => {
    const params = getState().catalogParams;
    getGames(params).then((response) => {
      if (params.more) {
        dispatch(addGames(response.data.results));
      } else {
        dispatch(setGames(response.data.results));
      }
    });
  };
}
