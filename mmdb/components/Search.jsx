import { ReactComponent as SearchIcon } from "../../src/icons/Search.svg";
import "./Search.css";

const Search = () => (
  <search className="main__search">
    <form action="" className="wrapper form">
      <SearchIcon className="icon" role="img" />

      <label htmlFor="mainSearch" className="sr-only">
        Search for a title or a imdb id.
      </label>

      <input id="mainSearch" type="search" placeholder="Search for a title" />

      <label htmlFor="btnSearch" className="sr-only">
        search.
      </label>

      <button id="btnSearch" className="btn">
        Search
      </button>
    </form>
  </search>
);

export default Search;
