import { useEffect, useState } from "react";
import Cover from "../../components/Cover";
import Status from "../../components/Status";
import "./Main.css";

export default function Main() {
  const [watchlist, setWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist") || "[]");
  });

  const isWatchlistEmpty = watchlist.length <= 0;

  return (
    <main>
      <Cover page="watchlist" />
      {isWatchlistEmpty && <Status message="empty" showBtn={true} />}
    </main>
  );
}
