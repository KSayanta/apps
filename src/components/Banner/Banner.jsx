import "./Banner.css";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function Banner(status, children, ...rest) {
  return (
    <div className={"banner " + status} {...rest}>
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
