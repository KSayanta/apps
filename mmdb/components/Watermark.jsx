import { ReactComponent as Reel } from "../../src/icons/Reel.svg";
import "./Watermark.css";

const Watermark = ({ className }) => (
  <div className={`watermark ${className}`} aria-roledescription="watermark">
    <Reel className="icon" role="img" />
    <p>Start exploring</p>
  </div>
);

export default Watermark;
