import { ReactComponent as StarIcon } from "../../src/icons/Star.svg";
import { ReactComponent as MinusIcon } from "../../src/icons/Minus.svg";
import { ReactComponent as PlusIcon } from "../../src/icons/Plus.svg";
import "./MovieCard.css";

const MovieCard = ({ movie, addToList, removeFromList, watchlistArr }) => {
  const isInWatchlist =
    !watchlistArr ||
    watchlistArr.filter(item => item.imdbID === movie.imdbID).length > 0;

  return (
    <article className="card--movie">
      <a
        href={`https://www.imdb.com/title/${movie.imdbID}`}
        target="_blank"
        className="poster"
      >
        <img src={movie.Poster} alt={`Poster of ${movie.Title}`} />
      </a>

      <div className="wrapper--heading">
        <h3 className="heading">{movie.Title}</h3>
        <StarIcon className="icon" role="img" />
        <span className="rating">{movie.imdbRating}</span>
      </div>

      <div className="wrapper--details">
        <span className="time">{movie.Year}</span>
        <span className="type">{movie.Type}</span>
        <span className="genre">{movie.Genre}</span>

        {isInWatchlist ? (
          <button className="btn" onClick={() => removeFromList(movie.imdbID)}>
            <MinusIcon className="icon icon-sm" role="img" />
            Remove
          </button>
        ) : (
          <button className="btn" onClick={() => addToList(movie.imdbID)}>
            <PlusIcon className="icon icon-sm" role="img" />
            Watchlist
          </button>
        )}
      </div>

      <p className="description">{movie.Plot}</p>
    </article>
  );
};

export default MovieCard;
