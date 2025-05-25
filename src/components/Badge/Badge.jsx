import "./Badge.css";

export default function Badge({
  children,
  href,
  rounded,
  className = "",
  variant = 0,
  ...rest
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

  let cName = className + " ";
  cName += "badge " + color[variant];
  cName += rounded ? " rounded" : "";

  return !href ? (
    <button {...rest} className={cName}>
      {children}
    </button>
  ) : (
    <a {...rest} className={cName} href={href}>
      {children}
    </a>
  );
}
