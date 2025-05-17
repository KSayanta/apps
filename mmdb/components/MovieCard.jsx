import { ReactComponent as StarIcon } from "../../src/icons/Star.svg";
import { ReactComponent as MinusIcon } from "../../src/icons/Minus.svg";
import { ReactComponent as PlusIcon } from "../../src/icons/Plus.svg";
import "./MovieCard.css";

const MovieCard = () => (
  <article className="card--movie">
    <img
      className="poster"
      src="https://dummyimage.com/100x150/eee/aaa"
      alt=""
    />

    <div className="wrapper--heading">
      <h3 className="heading">Movie Name</h3>
      <StarIcon className="icon" role="img" />
      <span className="rating">8.1</span>
    </div>

    <div className="wrapper--details">
      <span className="time">117 min</span>
      <span className="genere">Action, Drama, Sci-fi</span>
      <button className="btn">
        <PlusIcon className="icon icon-sm" role="img" />
        Watchlist
      </button>
    </div>

    <p className="description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ducimus
      voluptate aperiam commodi mollitia quisquam iusto modi illum molestias
      est. Est ducimus quidem animi officiis labore porro blanditiis quod
      beatae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
      ducimus voluptate aperiam commodi mollitia quisquam iusto modi illum
      molestias est. Est ducimus quidem animi officiis labore porro blanditiis
      quod beatae!
    </p>
  </article>
);

export default MovieCard;
