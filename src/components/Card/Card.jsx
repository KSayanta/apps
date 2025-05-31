import "./Card.css";

export default function Card({ children, ...props }) {
  const { className } = props;
  return (
    <div {...props} className={["card", className].join(" ")}>
      {children}
    </div>
  );
}
