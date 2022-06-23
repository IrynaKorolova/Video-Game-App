import "./GameList.css";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCatalogParams } from "../../store/catalogParams/actionCreators";
import { catalogParamsSelector } from "../../store/catalogParams/selectors";
import { gamesSelector } from "../../store/games/selectors";
import { getGamesThunk } from "../../store/games/thunks";

import GameCard from "../GameCard/GameCard";

export default function GameList() {
  const games = useSelector(gamesSelector);
  const catalogParams = useSelector(catalogParamsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGamesThunk());
  }, [catalogParams]);

  function prevPageHandler() {
    return dispatch(
      setCatalogParams({ ...catalogParams, page: catalogParams.page - 1 })
    );
  }

  function nextPageHandler() {
    return dispatch(
      setCatalogParams({ ...catalogParams, page: catalogParams.page + 1 })
    );
  }

  return (
    <main>
      <div className="container">
        <div className="game-list-wrap">
          {games.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
        </div>
        <div className="btn-wrap">
          {catalogParams.page > 1 && (
            <button className="game-btn" onClick={prevPageHandler}>
              ❮ Previous Page
            </button>
          )}
          <button className="game-btn" onClick={nextPageHandler}>
            Next Page ❯
          </button>
        </div>
      </div>
    </main>
  );
}
