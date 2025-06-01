import "./Testimonial.css";

/**
 * Testimonial component
 */

export default function Testimonial({ imgPosition = "left", children }) {
  return (
    <div className="testimonial-container">
      <figure className={["testimonial", imgPosition].join(" ")}>
        {children}
      </figure>
    </div>
  );
}
