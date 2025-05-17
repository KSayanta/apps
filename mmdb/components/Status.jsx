import { ReactComponent as Plus } from "../../src/icons/Plus.svg";
import "./Status.css";

const Status = ({ className, message, showBtn }) => (
  <div className={`status ${className}`}>
    <p className="msg">{message}</p>

    {showBtn && (
      <a href="#" className="btn">
        <Plus className="icon icon-sm" role="img" />
        Let's add some movies!
      </a>
    )}
  </div>
);

const msg = {
  empty: " Your watchlist is looking a little empty... ",
  failure: "Unable to find what you’re looking for. Please try another search.",
};

export default Status;
