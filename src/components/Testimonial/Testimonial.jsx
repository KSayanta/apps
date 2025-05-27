import "./Testimonial.css";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Testimonial({
  imgSrc,
  imgAlt = "",
  imgPosition,
  author,
  designation,
  sourceName,
  sourceLink,
  logo,
  style,
  children,
}) {
  let cName = imgPosition ? `testimonial right` : "testimonial";
  cName += imgSrc ? " full" : " logo";

  return (
    <div className="testimonial-container">
      <figure style={style} className={cName}>
        {imgSrc ? (
          <img className="testimonial-image" src={imgSrc} alt={imgAlt} />
        ) : null}

        {logo ? <div className="testimonial-logo">{logo}</div> : null}

        <blockquote cite="http://reutes.com" className="testimonial-body">
          {children}
        </blockquote>

        <figcaption className="testimonial-footer">
          <strong className="testimonial-author">{author}</strong>
          <span className="testimonial-designation">{designation}</span>
          {sourceLink && sourceName ? (
            <cite className="testimonial-source">
              <a href={sourceLink}>
                {sourceName} <FaExternalLinkAlt />
              </a>
            </cite>
          ) : null}
          {!sourceLink && sourceName ? (
            <cite className="testimonial-source">{sourceName}</cite>
          ) : null}
        </figcaption>
      </figure>
    </div>
  );
}
