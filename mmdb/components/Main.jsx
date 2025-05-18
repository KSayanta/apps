import { useState, useEffect, useRef } from "react";
import { getDatafromOmdb, getDatafromOmdbById } from "../../src/utils";

import Cover from "./Cover";
import Search from "./Search";
import Status from "./Status";
import MovieCards from "./MovieCards";
import Watermark from "./Watermark";

import "./Main.css";

export default function Main() {
  // Refs

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
        async search => await getDatafromOmdbById(search.imdbID)
      );
      setMoviesArr(await Promise.all(showsPromises));
    }
  }

  function updateSearchInput(e) {
    const { value } = e.currentTarget;
    setSearchInput(value);
  }

  return (
    <main className="main">
      <Cover page="search" />

      <Search
        action={submitSearch}
        onChange={updateSearchInput}
        value={searchInput}
      />

      {!isSearched && <Watermark />}
      {searchRes && <MovieCards cards={moviesArr} />}
      {isSearchError && <Status message="failure" showBtn="" />}
    </main>
  );
}
