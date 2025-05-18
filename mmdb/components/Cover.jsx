import "./Cover.css";

const Cover = ({ page }) => (
  <section className="main__cover">
    <h2 className="heading">{pages[page].heading}</h2>
    <a href={pages[page].link} className="btn btn-alt">
      {pages[page].linkText}
    </a>
  </section>
);

const pages = {
  search: {
    heading: "Find your film",
    linkText: "My Watchlist",
    link: "./watchlist/",
  },
  watchlist: {
    heading: "My Watchlist",
    linkText: "Search for Movies",
    link: "../",
  },
};

export default Cover;
