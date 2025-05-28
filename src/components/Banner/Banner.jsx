import "./Banner.css";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationCircle,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function Banner({
  className = "",
  status,
  title,
  children,
  ...rest
}) {
  return (
    <div className={"banner " + status + " " + className} {...rest}>
      <span className="banner-icon">
        {status === "success" && <FaCheckCircle />}
        {status === "warning" && <FaExclamationTriangle />}
        {status === "update" && <FaExclamationCircle />}
        {status === "error" && <FaTimesCircle />}
      </span>

      <p className="banner-title">{title}</p>
      {children ? <p className="banner-body">{children}</p> : null}
    </div>
  );
}
