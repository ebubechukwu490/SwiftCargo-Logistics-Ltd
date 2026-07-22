import './TestimonialCard.css';

export default function TestimonialCard({ testimonial }) {
  const { name, role, company, quote, rating } = testimonial;

  return (
    <blockquote className="testimonial-card">
      <div className="testimonial-card__rating" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
            <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.92L8 10.67l-3.52 1.85.67-3.92-2.85-2.78 3.94-.57L8 1.5z" />
          </svg>
        ))}
      </div>
      <p className="testimonial-card__quote">&ldquo;{quote}&rdquo;</p>
      <footer className="testimonial-card__author">
        <cite className="testimonial-card__name">{name}</cite>
        <span className="testimonial-card__role">
          {role}, {company}
        </span>
      </footer>
    </blockquote>
  );
}
