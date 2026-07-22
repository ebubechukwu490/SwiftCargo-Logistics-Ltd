import SEOHead from '@/components/common/SEOHead';
import ServicesHero from '@/sections/services/ServicesHero';
import ServiceDetail from '@/sections/services/ServiceDetail';
import CTASection from '@/sections/home/CTASection';
import { SERVICES } from '@/constants/services';

export default function Services() {
  return (
    <div className="page">
      <SEOHead page="services" />
      <ServicesHero />
      {SERVICES.map((service, index) => (
        <ServiceDetail key={service.id} service={service} reversed={index % 2 === 1} />
      ))}
      <CTASection />
    </div>
  );
}
