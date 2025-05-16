import React from "react";
import { ReactComponent as Search } from "../../public/icons/Search.svg";
import { ReactComponent as Reel } from "../../public/icons/Reel.svg";
import "./Main.css";

export default function Main() {
  return (
    <main className="main">
      <section className="main__cover">
        <h2 className="heading">Find your film</h2>
        <a href="#" className="btn btn-alt">
          My Watchlist
        </a>
      </section>

      <search className="main__search">
        <form action="" className="wrapper form">
          <Search className="icon" />
          <input type="search" placeholder="Search for a title" />
          <button className="btn">Search</button>
        </form>
      </search>

      <section className="wrapper main__content ">
        <div className="empty">
          <Reel className="icon" role="img" />
          <p>Start exploring</p>
        </div>
      </section>
    </main>
  );
}
