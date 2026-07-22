import Container from '@/components/layout/Container';
import SectionHeading from '@/components/common/SectionHeading';
import './CoreValues.css';

const VALUES = [
  { title: 'Reliability', description: 'We show up when we say we will, and we communicate the moment something changes.' },
  { title: 'Integrity', description: 'Transparent pricing, honest timelines, and no surprises once a route is confirmed.' },
  { title: 'Efficiency', description: 'Organized dispatch and warehousing that keeps your goods moving without delay.' },
  { title: 'Partnership', description: 'We work as an extension of your operations, not just a one-off vendor.' },
];

export default function CoreValues() {
  return (
    <section className="section core-values">
      <Container>
        <SectionHeading eyebrow="What We Stand For" title="Our Core Values" align="center" />
        <div className="core-values__grid">
          {VALUES.map((value) => (
            <div key={value.title} className="core-values__item">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
