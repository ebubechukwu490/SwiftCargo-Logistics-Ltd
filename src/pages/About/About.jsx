import SEOHead from '@/components/common/SEOHead';
import AboutHero from '@/sections/about/AboutHero';
import CompanyStory from '@/sections/about/CompanyStory';
import MissionVision from '@/sections/about/MissionVision';
import CoreValues from '@/sections/about/CoreValues';
import CTASection from '@/sections/home/CTASection';

export default function About() {
  return (
    <div className="page">
      <SEOHead page="about" />
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <CTASection />
    </div>
  );
}
