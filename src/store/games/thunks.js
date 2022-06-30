import { getGames } from "../../api/games";
import {
  setGames,
  addGames,
  setLoading,
  setLoaded,
  setError,
} from "./actionCreators";

export function getGamesThunk() {
  return (dispatch, getState) => {
    const params = getState().catalogParams;
    dispatch(setLoading());
    getGames(params)
      .then((response) => {
        if (params.more) {
          dispatch(addGames(response.data.results));
        } else {
          dispatch(setGames(response.data.results));
        }
      })
      .catch((error) => dispatch(setError(error)))
      .finally(() => dispatch(setLoaded()));
  };
}
