import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/layout/Container';
import SectionHeading from '@/components/common/SectionHeading';
import TestimonialCard from '@/components/cards/TestimonialCard';
import { TESTIMONIALS } from '@/constants/testimonials';
import './TestimonialsPreview.css';

export default function TestimonialsPreview() {
  const testimonials = TESTIMONIALS.slice(0, 4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  const autoPlayRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Pause auto-play on user interaction
  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Touch swipe support
  const touchStartRef = useRef(0);
  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEnd;
    if (Math.abs(diff) > 50) {
      handleInteraction();
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  return (
    <section className="section testimonials-preview section--gray">
      <Container>
        <SectionHeading
          eyebrow="Client Feedback"
          title="Trusted by Businesses Across Nigeria"
          align="center"
        />
      </Container>

      <div 
        className="testimonials-preview__carousel"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="testimonials-preview__track">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={`testimonials-preview__slide ${index === currentIndex ? 'testimonials-preview__slide--active' : ''}`}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button 
          className="testimonials-preview__nav testimonials-preview__nav--prev"
          onClick={() => { prevSlide(); handleInteraction(); }}
          aria-label="Previous testimonial"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button 
          className="testimonials-preview__nav testimonials-preview__nav--next"
          onClick={() => { nextSlide(); handleInteraction(); }}
          aria-label="Next testimonial"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Progress Indicators */}
        <div className="testimonials-preview__indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonials-preview__indicator ${index === currentIndex ? 'testimonials-preview__indicator--active' : ''}`}
              onClick={() => { goToSlide(index); handleInteraction(); }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* See More Button */}
        <div className="testimonials-preview__see-more">
          <Link to="/testimonials" className="testimonials-preview__see-more-btn">
            View All Testimonials
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
