import MovieCard from "./MovieCard";
import "./MovieCards.css";

const MovieCards = ({ cards }) => {
  const cardsElm = cards.map((card, idx) => (
    <MovieCard key={idx} card={card} />
  ));

  return <section className="wrapper main__content ">{cardsElm}</section>;
};

export default MovieCards;
