import { FaCloudUploadAlt } from "react-icons/fa";

// Card icon
export default function CardIcon({ children, className }) {
  return (
    <span className={["card-icon", className].join(" ")}>
      {children ? children : <FaCloudUploadAlt />}
    </span>
  );
}
