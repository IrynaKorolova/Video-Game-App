import "./GameCard.css";

import { Link } from "react-router-dom";

export default function Games({ game }) {
  const gameGenres = game.genres.map((genres) => genres.slug).join(", ");

  return (
    <div className="game-card">
      <div className="game-header">
        <img
          src={game.background_image}
          loading="lazy"
          className="game-img"
          alt="game"
        ></img>
      </div>

      <div className="game-content">
        <ul className="game-content-list">
          <li>
            <Link className="game-title-link" to={`/games/${game.slug}`}>
              {game.name}
            </Link>
          </li>
          <li>Rating: {game.rating}</li>
          <li>Release date: {game.released}</li>
          <li>Genres: {gameGenres}</li>
        </ul>
      </div>
    </div>
  );
}
