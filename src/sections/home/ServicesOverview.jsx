import { useEffect, useRef, useState } from 'react';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/common/SectionHeading';
import ServiceCard from '@/components/cards/ServiceCard';
import { SERVICES } from '@/constants/services';
import './ServicesOverview.css';

export default function ServicesOverview() {
  const containerRef = useRef(null);
  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [progresses, setProgresses] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    let isIntersecting = false;
    let frameId = null;

    const handleScroll = () => {
      if (!isIntersecting) return;
      
      const newProgresses = cardRefs.map((ref, index) => {
        const cardElement = ref.current;
        if (!cardElement) return 0;
        
        const rect = cardElement.getBoundingClientRect();
        
        // Stagger calculations:
        // Indices 0, 1 (first two) start early. Indices 2, 3 (last two) start later.
        let start = window.innerHeight;
        let end = window.innerHeight * 0.5; // Complete when card is at middle
        
        if (index >= 2) {
          start = window.innerHeight * 0.75;
          end = window.innerHeight * 0.45;
        }
        
        const total = start - end;
        const current = start - rect.top;
        return Math.max(0, Math.min(1, current / total));
      });
      
      setProgresses(newProgresses);
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
    <section ref={containerRef} className="section services-overview">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Logistics Solutions Built for Nigerian Business"
          subtitle="From single shipments to recurring corporate routes, SwiftCargo covers the full haulage chain: transport, storage, and last-mile delivery."
          align="center"
        />
        <div className="services-overview__grid">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              ref={cardRefs[index]}
              className="services-overview__card-wrapper" 
              data-index={index}
              style={{ '--card-scroll-progress': `${progresses[index]}` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
