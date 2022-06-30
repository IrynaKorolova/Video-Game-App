import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { catalogParamsSelector } from "../../store/catalogParams/selectors";
import { getGamesThunk } from "../../store/games/thunks";

import GameList from "../GameList/GameList";
import Filter from "./../Filter/Filter";
import Sort from "./../Sort/Sort";

import "./GameCatalog.css";

export default function GameCatalog() {
  const dispatch = useDispatch();
  const catalogParams = useSelector(catalogParamsSelector);
  
  useEffect(() => {
    dispatch(getGamesThunk());
  }, [catalogParams]);
  return (
    <>
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
      <GameList />
    </>
  );
}
