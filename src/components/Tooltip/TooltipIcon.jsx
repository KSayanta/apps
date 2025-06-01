import { BsBracesAsterisk } from "react-icons/bs";

export default function TooltipIcon({ children }) {
  return (
    <span className="tooltip-icon">
      {children ? children : <BsBracesAsterisk />}
    </span>
  );
}
