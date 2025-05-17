import React from "react";
import { ReactComponent as Search } from "../../public/icons/Search.svg";
import { ReactComponent as Reel } from "../../public/icons/Reel.svg";
import { ReactComponent as Star } from "../../public/icons/Star.svg";
import { ReactComponent as Minus } from "../../public/icons/Minus.svg";
import { ReactComponent as Plus } from "../../public/icons/Plus.svg";
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
          <Search className="icon" role="img" />

          <label htmlFor="mainSearch" className="sr-only">
            Search for a title or a imdb id.
          </label>

          <input
            id="mainSearch"
            type="search"
            placeholder="Search for a title"
          />

          <label htmlFor="btnSearch" className="sr-only">
            search.
          </label>

          <button id="btnSearch" className="btn">
            Search
          </button>
        </form>
      </search>

      <section className="wrapper main__content ">
        <div className="hidden watermark " aria-roledescription="watermark">
          <Reel className="icon" role="img" />
          <p>Start exploring</p>
        </div>

        <article className="card--movie">
          <img
            className="poster"
            src="https://dummyimage.com/100x150/eee/aaa"
            alt=""
          />

          <div className="wrapper--heading">
            <h3 className="heading">Movie Name</h3>
            <Star className="icon" role="img" />
            <span className="rating">8.1</span>
          </div>

          <div className="wrapper--details">
            <span className="time">117 min</span>
            <span className="genere">Action, Drama, Sci-fi</span>
            <button className="btn">
              <Plus className="icon" role="img" />
              Watchlist
            </button>
          </div>

          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            ducimus voluptate aperiam commodi mollitia quisquam iusto modi illum
            molestias est. Est ducimus quidem animi officiis labore porro
            blanditiis quod beatae! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quod ducimus voluptate aperiam commodi mollitia
            quisquam iusto modi illum molestias est. Est ducimus quidem animi
            officiis labore porro blanditiis quod beatae!
          </p>
        </article>
      </section>
    </main>
  );
}
