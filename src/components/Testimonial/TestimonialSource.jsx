import { FaExternalLinkAlt } from "react-icons/fa";

export default function TestimonialSource({ children, href }) {
  return (
    <cite className="testimonial-source">
      {href ? (
        <a href={href}>
          {children} <FaExternalLinkAlt />
        </a>
      ) : (
        { children }
      )}
    </cite>
  );
}
