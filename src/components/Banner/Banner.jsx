import "./Banner.css";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

/**
 *  Banner component
 */

export default function Banner({ status, children, ...props }) {
  return (
    <div className={"banner " + status} {...props}>
      <span className="banner-icon">
        {status === "success" && <FaCheckCircle />}
        {status === "warning" && <FaExclamationTriangle />}
        {status === "update" && <FaExclamationCircle />}
        {status === "error" && <FaTimesCircle />}
      </span>
      {children}
    </div>
  );
}
