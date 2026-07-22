import SEOHead from '@/components/common/SEOHead';
import Container from '@/components/layout/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import QuoteForm from '@/sections/quote/QuoteForm';
import './Quote.css';

export default function Quote() {
  return (
    <div className="page">
      <SEOHead page="quote" />
      
      <section className="page-hero">
        <Container>
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Get a Quote' }]} />
          <span className="page-hero__eyebrow">Instant Quote</span>
          <h1 className="page-hero__title">Logistics Service Calculator</h1>
          <p className="page-hero__subtitle">
            Provide details about your freight requirements and cargo paths to receive an estimated quote and book dispatch routing.
          </p>
        </Container>
      </section>

      <section className="section">
        <Container style={{ maxWidth: '800px' }}>
          <div className="quote-page__card">
            <QuoteForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
