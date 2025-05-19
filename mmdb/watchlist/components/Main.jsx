import { useEffect, useState } from "react";
import Cover from "../../components/Cover";
import Status from "../../components/Status";
import MovieCards from "../../components/MovieCards";
import "./Main.css";

export default function Main() {
  const [watchlist, setWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist") || "[]");
  });

  const isWatchlistEmpty = watchlist.length <= 0;

  function removeFromWatchlist(id) {
    setWatchlist(prevList => {
      const movieIdx = prevList.findIndex(movie => movie.imdbID === id);
      if (movieIdx < 0) return prevList;
      return prevList.toSpliced(movieIdx, 1);
    });
  }

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  return (
    <main>
      <Cover page="watchlist" />
      {isWatchlistEmpty && <Status message="empty" showBtn={true} />}
      {!isWatchlistEmpty && (
        <MovieCards cards={watchlist} removeFromList={removeFromWatchlist} />
      )}
    </main>
  );
}
