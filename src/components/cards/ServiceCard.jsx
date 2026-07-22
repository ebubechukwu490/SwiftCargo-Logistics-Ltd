import { Link } from 'react-router-dom';
import { ResponsiveImage } from '@/components/common/ImagePlaceholder';
import './ServiceCard.css';

export default function ServiceCard({ service, variant = 'default', loading = 'lazy' }) {
  const { id, title, shortDescription, image, imageLabel, aspectRatio } = service;

  return (
    <article className={`service-card service-card--${variant}`}>
      <Link to={`/services#${id}`} className="service-card__image-link">
        <ResponsiveImage src={image} alt={title} label={imageLabel} aspectRatio={aspectRatio || '16/10'} rounded loading={loading} />
      </Link>
      <div className="service-card__body">
        <h3 className="service-card__title">
          <Link to={`/services#${id}`}>{title}</Link>
        </h3>
        <p className="service-card__description">{shortDescription}</p>
        <Link to={`/services#${id}`} className="service-card__link">
          Learn more
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
