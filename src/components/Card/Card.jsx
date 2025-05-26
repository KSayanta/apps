import "./Card.css";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function Card({
  iconColor,
  icon,
  title,
  href,
  label,
  children,
}) {
  const iconStyle = iconColor
    ? {
        backgroundColor: iconColor,
      }
    : null;

  return (
    <div className="card">
      <span style={iconStyle} className="card-icon">
        {icon ? icon : <FaCloudUploadAlt />}
      </span>
      <p className="card-title">{title}</p>
      <p className="card-body">{children}</p>
      {href ? (
        <a href={href} aria-label={label} className="card-link"></a>
      ) : null}
    </div>
  );
}
