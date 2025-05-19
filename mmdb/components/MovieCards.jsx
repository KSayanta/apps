import MovieCard from "./MovieCard";
import "./MovieCards.css";

const MovieCards = ({ moviesArr, addToList, removeFromList, watchlistArr }) => {
  const cardsElm = moviesArr.map((movie, idx) => (
    <MovieCard
      key={idx}
      movie={movie}
      addToList={addToList}
      removeFromList={removeFromList}
      watchlistArr={watchlistArr}
    />
  ));

  return <section className="wrapper main__content ">{cardsElm}</section>;
};

export default MovieCards;
