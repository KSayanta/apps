export default function TestimonialBody({ children, ...props }) {
  return (
    <blockquote {...props} className="testimonial-body">
      {children}
    </blockquote>
  );
}
