import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';
import Button from '@/components/buttons/Button';
import ImagePlaceholder from '@/components/common/ImagePlaceholder';
import { COMPANY_INFO } from '@/constants/companyInfo';
import './HeroSection.css';
export default function HeroSection() {
  return (
    <section className="hero">
      <Container>
        <div className="hero__grid">
          <div className="hero__content">
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
              {COMPANY_INFO.serviceAreas.map((area, index) => (
                <span 
                  key={area} 
                  className="hero__area-tag"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
