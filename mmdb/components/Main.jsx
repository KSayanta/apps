import { useState } from "react";
import { getDatafromOmdb, getDatafromOmdbById } from "../../src/utils";

import Cover from "./Cover";
import Search from "./Search";
import Status from "./Status";
import MovieCards from "./MovieCards";
import Watermark from "./Watermark";

import "./Main.css";

export default function Main() {
  // State
  const [searchArr, setSearchArr] = useState([]);

  // Derived
  const isSearched = searchArr.length > 0;

  // Handler functions
  async function submitSearch(formData) {
    const querry = formData.get("mainSearch");
    const searchesArr = await getDatafromOmdb(querry).then(data => data.Search);

    const showsPromises = searchesArr.map(
      async search => await getDatafromOmdbById(search.imdbID)
    );

    setSearchArr(await Promise.all(showsPromises));
  }

  return (
    <main className="main">
      <Cover />
      <Search action={submitSearch} />

      {!isSearched && <Watermark />}
      {isSearched && <MovieCards cards={searchArr} />}

      <Status className="hidden" message="" showBtn="" />
    </main>
  );
}
