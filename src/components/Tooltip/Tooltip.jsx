import "./Tooltip.css";
import { FaTimes } from "react-icons/fa";

export default function Tooltip({
  basePosition,
  variant,
  mode,
  title,
  icon,
  children,
}) {
  const color = ["dark", "blue", "purple", "green"];
  const style = basePosition
    ? {
        "--position": `${basePosition}%`,
      }
    : null;

  let cName = `tooltip ${color[variant]}`;
  cName += mode ? " inverted" : "";

  return (
    <div style={style} className={cName}>
      <span className="tooltip-icon">{icon}</span>

      <p className="tooltip-title">{title}</p>
      <p className="tooltip-body">{children}</p>

      <button className="tooltip-close">
        <FaTimes />
      </button>
    </div>
  );
}
