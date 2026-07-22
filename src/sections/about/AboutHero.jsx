import Container from '@/components/layout/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import './AboutHero.css';

export default function AboutHero() {
  return (
    <section className="page-hero">
      <Container>
        <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'About' }]} />
        <span className="page-hero__eyebrow">About SwiftCargo</span>
        <h1 className="page-hero__title">Built on Trust, Driven by Reliability</h1>
        <p className="page-hero__subtitle">
          For over four years, SwiftCargo Logistics has moved cargo for businesses across Lagos, Ibadan, and Abuja, quietly building a reputation on referrals and consistent delivery.
        </p>
      </Container>
    </section>
  );
}
