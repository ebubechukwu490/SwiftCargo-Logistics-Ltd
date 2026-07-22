import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/common/SectionHeading';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { TESTIMONIALS } from '@/constants/testimonials';
import './TestimonialsPreview.css';

export default function TestimonialsPreview() {
  const testimonials = TESTIMONIALS.slice(0, 4);
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    let isIntersecting = false;
    let frameId = null;

    const handleScroll = () => {
      if (!isIntersecting) return;
      const rect = element.getBoundingClientRect();
      const start = window.innerHeight * 0.35; // Animation begins late (when heading reaches 35% viewport height)
      const end = 0; // Animation completes when heading reaches the top (0)
      const total = start - end;
      const current = start - rect.top;
      const p = Math.max(0, Math.min(1, current / total));
      setProgress(p);
    };

    const onScroll = () => {
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(handleScroll);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          window.addEventListener('scroll', onScroll, { passive: true });
          handleScroll();
        } else {
          window.removeEventListener('scroll', onScroll);
          if (frameId) cancelAnimationFrame(frameId);
        }
      },
      { threshold: 0 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="section testimonials-preview section--gray" ref={sectionRef}>
      <Container>
        <SectionHeading
          eyebrow="Client Feedback"
          title="Trusted by Businesses Across Nigeria"
          align="center"
        />
      </Container>
      
      <div 
        className="testimonials-preview__slider-container"
        style={{ '--scroll-progress': `${progress}` }}
      >
        <div className="testimonials-preview__slider-track">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonials-preview__card-wrapper">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
          
          {/* The 5th slot - Circular See More button */}
          <div className="testimonials-preview__card-wrapper testimonials-preview__see-more-wrapper">
            <Link to="/testimonials" className="testimonials-preview__see-more-circle">
              <span className="see-more-circle__text">See More</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="see-more-circle__arrow">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
