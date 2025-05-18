import { ReactComponent as StarIcon } from "../../src/icons/Star.svg";
import { ReactComponent as MinusIcon } from "../../src/icons/Minus.svg";
import { ReactComponent as PlusIcon } from "../../src/icons/Plus.svg";
import "./MovieCard.css";

const MovieCard = ({ card, id, addToList, removeFromList, watchlistArr }) => {
  const isInWatchlist =
    watchlistArr.filter(movie => movie.imdbID === id).length > 0;

  return (
    <article className="card--movie">
      <img
        className="poster"
        src={card.Poster}
        alt={`Poster of ${card.Title}`}
      />

      <div className="wrapper--heading">
        <h3 className="heading">{card.Title}</h3>
        <StarIcon className="icon" role="img" />
        <span className="rating">{card.imdbRating}</span>
      </div>

      <div className="wrapper--details">
        <span className="time">{card.Year}</span>
        <span className="type">{card.Type}</span>
        <span className="genre">{card.Genre}</span>

        {isInWatchlist ? (
          <button className="btn" onClick={() => removeFromList(id)}>
            <MinusIcon className="icon icon-sm" role="img" />
            Remove
          </button>
        ) : (
          <button className="btn" onClick={() => addToList(id)}>
            <PlusIcon className="icon icon-sm" role="img" />
            Watchlist
          </button>
        )}
      </div>

      <p className="description">{card.Plot}</p>
    </article>
  );
};

export default MovieCard;
