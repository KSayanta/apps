import React from "react";

import Cover from "./Cover";
import Search from "./Search";
import Status from "./Status";
import MovieCard from "./MovieCard";
import Watermark from "./Watermark";
import "./Main.css";

export default function Main() {
  return (
    <main className="main">
      <Cover />
      <Search />

      <section className="hidden wrapper main__content ">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </section>

      <Status className="hidden" message="" showBtn="" />
      <Watermark className="" />
    </main>
  );
}
