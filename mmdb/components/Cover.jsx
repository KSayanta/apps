import "./Cover.css";

const Cover = ({ page, children }) => (
  <section className="main__cover">
    <div className="cover--wrapper">
      <h2 className="heading">{pages[page].heading}</h2>
      <a href={pages[page].link} className="btn btn-alt">
        {pages[page].linkText}
      </a>
    </div>
    {children}
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
