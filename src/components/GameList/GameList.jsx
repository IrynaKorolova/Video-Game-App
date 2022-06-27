import "./GameList.css";

import Pagination from "../Pagination/Pagination";
import GameCard from "../GameCard/GameCard";

import { gamesSelector } from "../../store/games/selectors";
import { useSelector } from "react-redux";

export default function GameList() {
  const games = useSelector(gamesSelector);

  return (
    <main>
      <div className="container">
        <div className="game-list-wrap">
          {games.map((game) => (
            <GameCard key={game.id} game={game}></GameCard>
          ))}
        </div>
        <Pagination />
      </div>
    </main>
  );
}
