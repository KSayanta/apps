import MovieCard from "./MovieCard";
import "./MovieCards.css";

const MovieCards = ({ cards, addToList, removeFromList, watchlistArr }) => {
  const cardsElm = cards.map((card, idx) => (
    <MovieCard
      key={idx}
      id={card.imdbID}
      card={card}
      addToList={addToList}
      removeFromList={removeFromList}
      watchlistArr={watchlistArr}
    />
  ));

  return <section className="wrapper main__content ">{cardsElm}</section>;
};

export default MovieCards;
