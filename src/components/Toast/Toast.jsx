import { createPortal } from "react-dom";
import "./Toast.css";
import { GoAlert } from "react-icons/go";
import { GoCheckCircle } from "react-icons/go";
import { GoInfo } from "react-icons/go";
import { GoXCircle } from "react-icons/go";

export default function Toast({ title, children, status }) {
  return createPortal(
    <div className={`toast ${status}`}>
      <span className="toast-icon">
        {status === "success" && <GoCheckCircle />}
        {status === "warning" && <GoAlert />}
        {status === "update" && <GoInfo />}
        {status === "error" && <GoXCircle />}
      </span>

      <p className="toast-title">{title}</p>
      <p className="toast-body">{children}</p>
    </div>,
    document.body
  );
}
