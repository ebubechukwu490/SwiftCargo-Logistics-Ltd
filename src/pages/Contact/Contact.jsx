import SEOHead from '@/components/common/SEOHead';
import Container from '@/components/layout/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import ContactForm from '@/sections/contact/ContactForm';
import ContactInfo from '@/sections/contact/ContactInfo';
import MapSection from '@/sections/contact/MapSection';
import './Contact.css';

export default function Contact() {
  return (
    <div className="page">
      <SEOHead page="contact" />
      
      <section className="page-hero">
        <Container>
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Contact Us' }]} />
          <span className="page-hero__eyebrow">Get in Touch</span>
          <h1 className="page-hero__title">Contact SwiftCargo</h1>
          <p className="page-hero__subtitle">
            Have questions about our shipping services, warehousing rates, or custom routes? Reach out to our logistics desk.
          </p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="contact-page__grid">
            {/* Left side: Info & Map */}
            <div className="contact-page__details">
              <h2 className="contact-page__heading font-bold">Our Office Details</h2>
              <ContactInfo />
              
              <div style={{ marginTop: 'var(--space-2xl)' }}>
                <h2 className="contact-page__heading font-bold">Find Us on the Map</h2>
                <MapSection />
              </div>
            </div>

            {/* Right side: Contact Form */}
            <div className="contact-page__form-container">
              <h2 className="contact-page__heading font-bold">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
