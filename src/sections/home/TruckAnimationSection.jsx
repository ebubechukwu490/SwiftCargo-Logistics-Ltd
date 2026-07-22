import { useEffect, useRef, useState } from 'react';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/common/SectionHeading';
import './TruckAnimationSection.css';

export default function TruckAnimationSection() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    let isIntersecting = false;
    let frameId = null;

    const handleScroll = () => {
      if (!isIntersecting) return;
      const rect = element.getBoundingClientRect();
      const totalRange = window.innerHeight + rect.height;
      const current = window.innerHeight - rect.top;
      const p = Math.max(0, Math.min(1, current / totalRange));
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
    <section 
      ref={containerRef} 
      className="section truck-animation-section"
      style={{ '--scroll-progress': `${progress}` }}
    >
      <Container>
        <SectionHeading
          eyebrow="On the Move"
          title="Swift Cargo, Nationwide Delivery"
          subtitle="Watch us bridge the gap across Nigerian cities. As you scroll, our fleet delivers to your destination."
          align="center"
          light={true}
        />
        
        {/* Parallax Landscape & Highway */}
        <div className="truck-animation__landscape">
          {/* Background Hills / Skyline silhouette */}
          <div className="truck-animation__skyline">
            <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="truck-animation__skyline-svg">
              <path d="M0,100 L0,80 Q50,70 100,80 T200,75 T300,85 T400,70 T500,80 T600,75 T700,80 T800,70 T900,75 T1000,70 L1000,100 Z" fill="#133B6B" opacity="0.3" />
              <path d="M0,100 L0,88 Q80,82 160,88 T320,85 T480,90 T640,86 T800,89 T960,85 L1000,88 L1000,100 Z" fill="#133B6B" opacity="0.5" />
            </svg>
          </div>

          {/* Minimal roadside elements (e.g. silhouette trees) */}
          <div className="truck-animation__trees">
            <svg viewBox="0 0 1000 100" preserveAspectRatio="none" className="truck-animation__trees-svg">
              {/* Tree 1 */}
              <g transform="translate(100, 60)">
                <path d="M10,40 L10,15 L5,15 L10,5 L15,15 L10,15 Z" fill="#E67E22" opacity="0.6" />
                <rect x="9" y="30" width="2" height="10" fill="#ced4da" />
              </g>
              {/* Tree 2 */}
              <g transform="translate(350, 50)">
                <path d="M10,40 L10,15 L5,15 L10,5 L15,15 L10,15 Z" fill="#133B6B" opacity="0.6" />
                <rect x="9" y="30" width="2" height="10" fill="#ced4da" />
              </g>
              {/* Tree 3 */}
              <g transform="translate(680, 55)">
                <path d="M10,40 L10,15 L5,15 L10,5 L15,15 L10,15 Z" fill="#E67E22" opacity="0.6" />
                <rect x="9" y="30" width="2" height="10" fill="#ced4da" />
              </g>
              {/* Tree 4 */}
              <g transform="translate(850, 45)">
                <path d="M10,40 L10,15 L5,15 L10,5 L15,15 L10,15 Z" fill="#133B6B" opacity="0.6" />
                <rect x="9" y="30" width="2" height="10" fill="#ced4da" />
              </g>
            </svg>
          </div>

          {/* Road/Highway */}
          <div className="truck-animation__road">
            <div className="truck-animation__road-line"></div>
          </div>

          {/* Cargo Truck Wrapper */}
          <div className="truck-animation__truck-wrapper">
            <svg viewBox="0 0 180 80" width="180" height="80" className="truck-animation__truck-svg">
              <defs>
                <linearGradient id="cabGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff9f43" />
                  <stop offset="100%" stopColor="#e67e22" />
                </linearGradient>
                <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#f1f3f5" />
                </linearGradient>
              </defs>
              
              {/* Truck Cabin (Orange) */}
              <path d="M120,25 L145,25 C150,25 154,28 156,33 L163,46 C165,50 165,56 165,56 L120,56 Z" fill="url(#cabGrad)" />
              {/* Windshield / Window */}
              <path d="M125,29 L142,29 C144,29 146,31 147,33 L152,42 L125,42 Z" fill="#1a252f" opacity="0.85" />
              <line x1="145" y1="29" x2="145" y2="42" stroke="#ffffff" strokeWidth="0.8" opacity="0.3" />
              
              {/* Bumper/Lights */}
              <rect x="160" y="50" width="6" height="4" rx="1.5" fill="#f1c40f" />
              <rect x="156" y="53" width="9" height="3" rx="1" fill="#7f8c8d" />

              {/* Truck Bed / Cargo Box (White/Gray with SwiftCargo Branding) */}
              <rect x="15" y="10" width="105" height="46" rx="4" fill="url(#bodyGrad)" stroke="#ced4da" strokeWidth="1" />
              
              {/* SwiftCargo Branding text on truck body */}
              <text x="67" y="32" textAnchor="middle" fill="#0B2545" fontSize="10" fontWeight="bold" fontFamily="Inter, sans-serif" letterSpacing="0.8">
                SWIFTCARGO
              </text>
              {/* Sleek speed lines on the truck body */}
              <line x1="25" y1="40" x2="110" y2="40" stroke="#E67E22" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="35" y1="45" x2="110" y2="45" stroke="#0B2545" strokeWidth="1.8" strokeLinecap="round" />

              {/* Wheels with spokes */}
              {/* Wheel 1 (Back) */}
              <g 
                className="truck-wheel wheel-back"
                style={{ 
                  transformOrigin: '40px 56px',
                  transform: 'rotate(calc(var(--scroll-progress) * 2160deg))'
                }}
              >
                <circle cx="40" cy="56" r="11" fill="#1a252f" stroke="#2c3e50" strokeWidth="2" />
                <circle cx="40" cy="56" r="4.5" fill="#bdc3c7" />
                {/* Spokes */}
                <line x1="40" y1="45" x2="40" y2="67" stroke="#ffffff" strokeWidth="1.2" />
                <line x1="29" y1="56" x2="51" y2="56" stroke="#ffffff" strokeWidth="1.2" />
                <line x1="32" y1="48" x2="48" y2="64" stroke="#ffffff" strokeWidth="0.8" opacity="0.7" />
                <line x1="32" y1="64" x2="48" y2="48" stroke="#ffffff" strokeWidth="0.8" opacity="0.7" />
              </g>

              {/* Wheel 2 (Front) */}
              <g 
                className="truck-wheel wheel-front"
                style={{ 
                  transformOrigin: '135px 56px',
                  transform: 'rotate(calc(var(--scroll-progress) * 2160deg))'
                }}
              >
                <circle cx="135" cy="56" r="11" fill="#1a252f" stroke="#2c3e50" strokeWidth="2" />
                <circle cx="135" cy="56" r="4.5" fill="#bdc3c7" />
                {/* Spokes */}
                <line x1="135" y1="45" x2="135" y2="67" stroke="#ffffff" strokeWidth="1.2" />
                <line x1="124" y1="56" x2="146" y2="56" stroke="#ffffff" strokeWidth="1.2" />
                <line x1="127" y1="48" x2="143" y2="64" stroke="#ffffff" strokeWidth="0.8" opacity="0.7" />
                <line x1="127" y1="64" x2="143" y2="48" stroke="#ffffff" strokeWidth="0.8" opacity="0.7" />
              </g>
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
}
