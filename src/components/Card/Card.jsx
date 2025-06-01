import "./Card.css";
/**
 * Card component
 */
export default function Card({ children, ...props }) {
  const { className } = props;
  return (
    <div {...props} className={["card", className].join(" ")}>
      {children}
    </div>
  );
}
