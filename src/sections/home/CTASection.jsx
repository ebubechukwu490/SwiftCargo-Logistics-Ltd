import Container from '@/components/layout/Container';
import Button from '@/components/buttons/Button';
import { COMPANY_INFO } from '@/constants/companyInfo';
import './CTASection.css';

export default function CTASection() {
  return (
    <section className="cta-section">
      <Container>
        <div className="cta-section__inner">
          <div>
            <h2 className="cta-section__title">Ready to move your cargo with confidence?</h2>
            <p className="cta-section__subtitle">
              Get a quote in minutes, or chat with our team on WhatsApp for immediate assistance.
            </p>
          </div>
          <div className="cta-section__actions">
            <Button to="/quote" variant="primary" size="lg">Get a Quote</Button>
            <Button href={COMPANY_INFO.phone.whatsapp} variant="outline" size="lg" className="cta-section__btn-outline">
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
