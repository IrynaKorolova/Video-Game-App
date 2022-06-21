import "./GameCard.css";

export default function Games({ game }) {
  const gameGenres = game.genres.map((genres) => genres.slug).join(", ");

  return (
    <div className="game-card">
      <div className="game-header">
        <img src={game.background_image} className="game-img" alt="game"></img>
      </div>

      <div className="game-content">
        <ul className="game-content-list">
          <li><a className="game-title-link" href="/">{game.name}</a></li>
          <li>Rating: {game.rating}</li>
          <li>Release date: {game.released}</li>
          <li>Genres: {gameGenres}</li>
        </ul>
      </div>
    </div>
  );
}
