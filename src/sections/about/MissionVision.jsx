import Container from '@/components/layout/Container';
import './MissionVision.css';

export default function MissionVision() {
  return (
    <section className="section mission-vision section--gray">
      <Container>
        <div className="mission-vision__grid">
          <div className="mission-vision__card">
            <span className="mission-vision__eyebrow">Our Mission</span>
            <h3>To move cargo for Nigerian businesses with a level of reliability and communication that earns trust every time.</h3>
          </div>
          <div className="mission-vision__card">
            <span className="mission-vision__eyebrow">Our Vision</span>
            <h3>To become the logistics partner businesses across Nigeria think of first, known for consistency, not just cost.</h3>
          </div>
        </div>
      </Container>
    </section>
  );
}
