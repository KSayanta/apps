import { useRef } from "react";
import { ReactComponent as SearchIcon } from "../../src/icons/Search.svg";
import { ReactComponent as CloseIcon } from "../../src/icons/Cross.svg";
import "./Search.css";

const Search = ({ action, onChange, value, reset }) => {
  const inputRef = useRef(null);
  const isSearched = value != "";

  return (
    <search className="main__search">
      <form action={action} className="wrapper form">
        <div className="wrapper__content">
          <SearchIcon className="icon icon--search" role="img" />

          <input
            ref={inputRef}
            id="mainSearch"
            name="mainSearch"
            type="search"
            aria-label="Search for a title or a imdb id."
            placeholder="Search for a title"
            value={value}
            onChange={onChange}
          />

          {isSearched && (
            <button
              onClick={() => reset(inputRef)}
              type="reset"
              className="btn"
            >
              <CloseIcon className="icon icon-sm" role="img" />
            </button>
          )}
        </div>

        <button id="btnSearch" type="submit" className="btn">
          Search
        </button>
      </form>
    </search>
  );
};

export default Search;
