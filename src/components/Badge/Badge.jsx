import "./Badge.css";

/**
 * Badge component for display
 */
export default function Badge({
  children,
  rounded = false,
  variant = 0,
  ...props
}) {
  const color = [
    "gray",
    "red",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
    "pink",
  ];
  const mode = rounded ? "rounded" : "";
  return (
    <button {...props} className={["badge", color[variant], mode].join(" ")}>
      {children}
    </button>
  );
}
