import "./Tooltip.css";
import { FaTimes } from "react-icons/fa";

/**
 * Tooltip component
 */
export default function Tooltip({
  basePosition = 50,
  color = "dark",
  mode = null,
  onClose,
  children,
}) {
  return (
    <div
      style={{ "--position": `${basePosition}%` }}
      className={["tooltip", color, mode].join(" ")}
    >
      {children}
      <button onClick={onClose} className="tooltip-close">
        <FaTimes />
      </button>
    </div>
  );
}
