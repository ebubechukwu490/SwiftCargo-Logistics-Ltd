import Container from '@/components/layout/Container';
import Button from '@/components/buttons/Button';
import { ResponsiveImage } from '@/components/common/ImagePlaceholder';
import './ServiceDetail.css';

export default function ServiceDetail({ service, reversed = false }) {
  const { id, title, description, features, image, imageLabel, aspectRatio } = service;

  return (
    <section id={id} className={`section service-detail ${reversed ? 'service-detail--reversed' : ''}`}>
      <Container>
        <div className="service-detail__grid">
          <div className="service-detail__image">
            <ResponsiveImage src={image} alt={title} label={imageLabel} aspectRatio={aspectRatio || '16/10'} rounded />
          </div>
          <div className="service-detail__content">
            <h2 className="service-detail__title">{title}</h2>
            <p className="service-detail__description">{description}</p>
            <ul className="service-detail__features">
              {features.map((feature) => (
                <li key={feature}>
                  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Button to="/quote" variant="primary">Request a Quote</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
