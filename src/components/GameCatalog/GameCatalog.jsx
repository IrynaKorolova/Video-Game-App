import GameList from "../GameList/GameList";
import Filter from "./../Filter/Filter";
import Sort from "./../Sort/Sort";

import './GameCatalog.css';

export default function GameCatalog() {
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
