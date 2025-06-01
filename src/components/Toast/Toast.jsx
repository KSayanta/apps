import { GoAlert } from "react-icons/go";
import { GoCheckCircle } from "react-icons/go";
import { GoInfo } from "react-icons/go";
import { GoXCircle } from "react-icons/go";

import "./Toast.css";

/**
 * Toast component to display status messages
 */
export default function Toast({ children, status, ...props }) {
  return (
    <div className={`toast ${status}`} {...props}>
      <span className="toast-icon">
        {status === "success" && <GoCheckCircle />}
        {status === "warning" && <GoAlert />}
        {status === "update" && <GoInfo />}
        {status === "error" && <GoXCircle />}
      </span>
      {children}
    </div>
  );
}
