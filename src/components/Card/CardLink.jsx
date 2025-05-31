// Card link
export default function CardLink({ href, children }) {
  return <a href={href} aria-label={children} className="card-link"></a>;
}
