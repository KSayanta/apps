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
  const cName = "banner-icon";

  return (
    <div className={"banner " + status + " " + className} {...rest}>
      {status === "success" && <FaCheckCircle className={cName} />}
      {status === "warning" && <FaExclamationTriangle className={cName} />}
      {status === "update" && <FaExclamationCircle className={cName} />}
      {status === "error" && <FaTimesCircle className={cName} />}
      <p className="banner-title">{title}</p>
      {children ? <p className="banner-body">{children}</p> : null}
    </div>
  );
}
