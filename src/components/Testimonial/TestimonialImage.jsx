export default function TestimonialImage({ src, ...props }) {
  return (
    <picture className="testimonial-image">
      <img
        src={src ? src : "https://dummyimage.com/400x600/aaa/eee"}
        {...props}
      />
    </picture>
  );
}
