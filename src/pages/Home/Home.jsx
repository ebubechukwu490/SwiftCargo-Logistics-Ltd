import SEOHead from '@/components/common/SEOHead';
import HeroSection from '@/sections/home/HeroSection';
import ServicesOverview from '@/sections/home/ServicesOverview';
import TruckAnimationSection from '@/sections/home/TruckAnimationSection';
import WhyChooseUs from '@/sections/home/WhyChooseUs';
import TestimonialsPreview from '@/sections/home/TestimonialsPreview';
import CTASection from '@/sections/home/CTASection';

export default function Home() {
  return (
    <div className="page">
      <SEOHead page="home" />
      <HeroSection />
      <ServicesOverview />
      <TruckAnimationSection />
      <WhyChooseUs />
      <TestimonialsPreview />
      <CTASection />
    </div>
  );
}
