import Container from '@/components/layout/Container';
import SectionHeading from '@/components/common/SectionHeading';
import './WhyChooseUs.css';

const REASONS = [
  {
    title: 'Established Track Record',
    description: 'Over 4 years serving SMEs, e-commerce sellers, and corporate clients across Lagos, Ibadan, and Abuja.',
  },
  {
    title: 'Clear Communication',
    description: 'WhatsApp-first updates and responsive support mean you always know where your shipment stands.',
  },
  {
    title: 'Organized Operations',
    description: 'Structured dispatch and warehousing processes reduce delays and keep your goods accounted for.',
  },
  {
    title: 'Built to Scale With You',
    description: 'From one-off shipments to recurring corporate routes, our team adapts to your delivery volume.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section why-choose-us">
      <Container>
        <SectionHeading
          eyebrow="Why SwiftCargo"
          title="What Sets Us Apart"
          align="center"
        />
        <div className="why-choose-us__grid">
          {REASONS.map((reason, index) => (
            <div key={reason.title} className="why-choose-us__item">
              <span className="why-choose-us__number">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="why-choose-us__title">{reason.title}</h3>
              <p className="why-choose-us__description">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
