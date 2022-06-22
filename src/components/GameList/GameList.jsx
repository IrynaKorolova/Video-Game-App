import "./GameList.css";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCatalogParams } from "../../store/catalogParams/actionCreators";
import { catalogParamsSelector } from "../../store/catalogParams/selectors";
import { gamesSelector } from "../../store/games/selectors";
import { getGamesThunk } from "../../store/games/thunks";

import GameCard from "../GameCard/GameCard";
import Sort from "../Sort/Sort";
import Filter from "../Filter/Filter";

export default function GameList() {
  const games = useSelector(gamesSelector);
  const catalogParams = useSelector(catalogParamsSelector);
  console.log(catalogParams);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGamesThunk());
  }, [catalogParams]);

  return (
    <main>
      <div className="container">
        <div className="content-wrap">
          <h1 className="content-heading">New and trending</h1>
          <p className="content-description">
            Based on player counts and release date
          </p>
        </div>
        <div className="filters-wrap">
          <Filter />
          <Sort />
        </div>
        <div className="game-list-wrap">
          {games.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
        </div>
        <div className="btn-wrap">
        {catalogParams.page > 1 && (
          <button
            className="game-btn"
            onClick={() =>
              catalogParams.page > 1
                ? dispatch(setCatalogParams({ page: catalogParams.page - 1 }))
                : null
            }
          >
            ❮ Previous Page
          </button>
        )}
        <button
          className="game-btn"
          onClick={() =>
            dispatch(setCatalogParams({ page: catalogParams.page + 1 }))
          }
        >
          Next Page ❯
        </button>
      </div>
      </div>
    </main>
  );
}
