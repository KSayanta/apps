import { useState, useEffect } from "react";
import { getDatafromOmdb } from "../../src/utils";

import Cover from "./Cover";
import Search from "./Search";
import Status from "./Status";
import MovieCards from "./MovieCards";
import Watermark from "./Watermark";

import "./Main.css";

export default function Main() {
  // State
  const [searchInput, setSearchInput] = useState("");
  const [searchRes, setSearchRes] = useState({});
  const [moviesArr, setMoviesArr] = useState([]);
  const [watchListArr, setWatchListArr] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist") || "[]");
  });

  // Derived
  const isSearched = Object.keys(searchRes).length > 0;
  const isSearchError =
    isSearched && searchRes.Response === "False" && searchInput;

  // Handler functions
  async function submitSearch(formData) {
    const querry = formData.get("mainSearch");
    const res = await getDatafromOmdb(querry);
    setSearchRes(res);
    if (res.Response === "True") {
      const showsPromises = res.Search.map(
        async search => await getDatafromOmdb(search.imdbID)
      );
      setMoviesArr(await Promise.all(showsPromises));
    } else {
      setMoviesArr([]);
    }
  }

  function updateSearchInput(e) {
    const { value } = e.currentTarget;
    setSearchInput(value);
  }

  function resetSearchInput(searchInputRef) {
    searchInputRef.current.focus();
    setSearchInput("");
    setSearchRes({});
  }

  function addToWatchlist(id) {
    const newItem = moviesArr.filter(movie => movie.imdbID === id);
    setWatchListArr(prevList => [...prevList, ...newItem]);
  }

  function removeFromWatchlist(id) {
    setWatchListArr(prevList => {
      const movieIdx = prevList.findIndex(movie => movie.imdbID === id);
      if (movieIdx < 0) return prevList;
      return prevList.toSpliced(movieIdx, 1);
    });
  }

  // Side effects
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchListArr));
  }, [watchListArr]);

  return (
    <main className="main">
      <Cover page="search">
        <Search
          reset={resetSearchInput}
          action={submitSearch}
          onChange={updateSearchInput}
          value={searchInput}
        />
      </Cover>

      {isSearched && (
        <MovieCards
          watchlistArr={watchListArr}
          moviesArr={moviesArr}
          addToList={addToWatchlist}
          removeFromList={removeFromWatchlist}
        />
      )}

      {!isSearched && <Watermark />}
      {isSearchError && <Status message={searchRes.Error} />}
    </main>
  );
}
