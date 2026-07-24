import { useEffect } from 'react';
import SEOHead from '@/components/common/SEOHead';
import HeroSection from '@/sections/home/HeroSection';
import ServicesOverview from '@/sections/home/ServicesOverview';
import TruckAnimationSection from '@/sections/home/TruckAnimationSection';
import WhyChooseUs from '@/sections/home/WhyChooseUs';
import TestimonialsPreview from '@/sections/home/TestimonialsPreview';
import CTASection from '@/sections/home/CTASection';
import teamFleetImage from '@/assets/team-fleet.webp';
import advancedWarehouseBg from '@/assets/advanced_warehouse_bg.webp';
import cleanWarehouseBg from '@/assets/clean_warehouse_bg.webp';
import fleetOperationsHero from '@/assets/fleet_operations_hero.webp';
import interstateCargoTransport from '@/assets/interstate_cargo_transport.webp';
import warehousingStorage from '@/assets/warehousing_storage.webp';

// Images to preload after Home loads
const PRELOAD_IMAGES = [
  // About section images
  teamFleetImage,
  // Gallery section images
  advancedWarehouseBg,
  cleanWarehouseBg,
  fleetOperationsHero,
  interstateCargoTransport,
  warehousingStorage,
];

function preloadImages(imageUrls) {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}

export default function Home() {
  useEffect(() => {
    // Wait for Home images to load, then preload About and Gallery images
    const timer = setTimeout(() => {
      preloadImages(PRELOAD_IMAGES);
    }, 1500); // Start preloading after 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

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
