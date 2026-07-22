import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';
import Button from '@/components/buttons/Button';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';
import { COMPANY_INFO } from '@/constants/companyInfo';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import './HeroSection.css';
export default function HeroSection() {
  const { ref, isRevealed } = useScrollReveal();

  return (
    <section className="hero">
      <Container>
        <div className={`hero__grid ${isRevealed ? 'revealed' : ''}`} ref={ref}>
          <div className="hero__content reveal">
            <span className="hero__eyebrow">Established {COMPANY_INFO.founded}</span>
            <h1 className="hero__title">
              Reliable Logistics Across Nigeria
            </h1>
            <p className="hero__subtitle">
              {COMPANY_INFO.description}
            </p>
            <div className="hero__actions">
              <Button to="/quote" variant="primary" size="lg">
                Get a Quote
              </Button>
              <Button to="/tracking" variant="outline" size="lg" className="hero__btn-outline">
                Track Shipment
              </Button>
            </div>
            <div className="hero__areas">
              <span>Serving:</span>
              {COMPANY_INFO.serviceAreas.map((area) => (
                <span key={area} className="hero__area-tag">{area}</span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
