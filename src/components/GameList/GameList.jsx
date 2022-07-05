import "./GameList.css";

import { v4 as uuidv4 } from "uuid";

import Pagination from "../Pagination/Pagination";
import GameCard from "../GameCard/GameCard";
import Loader from "../Loader/Loader";

import { gamesSelector } from "../../store/games/selectors";
import { useSelector } from "react-redux";

export default function GameList() {
  const games = useSelector(gamesSelector);

  if (games.error) {
    return <h2>Sorry...try again later</h2>;
  }

  return (
    <main>
      <div className="container">
        <div className="game-list-wrap">
          {games.data.map((game) => (
            <GameCard key={uuidv4()} game={game}></GameCard>
          ))}
        </div>
        <div className="loader-wrap">{games.loading && <Loader></Loader>}</div>
        <Pagination />
      </div>
    </main>
  );
}
