import SEOHead from '@/components/common/SEOHead';
import Container from '@/components/layout/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import TestimonialCard from '@/components/cards/TestimonialCard';
import CTASection from '@/sections/home/CTASection';
import { TESTIMONIALS } from '@/constants/testimonials';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <div className="page">
      <SEOHead page="testimonials" />
      <section className="page-hero">
        <Container>
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Testimonials' }]} />
          <span className="page-hero__eyebrow">Client Testimonials</span>
          <h1 className="page-hero__title">What Our Clients Say</h1>
          <p className="page-hero__subtitle">
            Real feedback from the SMEs, e-commerce sellers, and corporate clients we move cargo for every week.
          </p>
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="testimonials-page__grid">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </section>
      <CTASection />
    </div>
  );
}
