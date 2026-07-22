import Container from '@/components/layout/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';

export default function ServicesHero() {
  return (
    <section className="page-hero">
      <Container>
        <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Services' }]} />
        <span className="page-hero__eyebrow">Our Services</span>
        <h1 className="page-hero__title">Logistics Solutions for Every Stage of the Journey</h1>
        <p className="page-hero__subtitle">
          Cargo transport, warehousing, last-mile delivery, and custom logistics programs, designed for SMEs, e-commerce sellers, and corporate clients across Nigeria.
        </p>
      </Container>
    </section>
  );
}
