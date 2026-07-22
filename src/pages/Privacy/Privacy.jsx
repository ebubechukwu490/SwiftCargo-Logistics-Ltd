import SEOHead from '@/components/common/SEOHead';
import Container from '@/components/layout/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { COMPANY_INFO } from '@/constants/companyInfo';

export default function Privacy() {
  return (
    <div className="page">
      <SEOHead page="privacy" />
      <section className="page-hero">
        <Container>
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Privacy Policy' }]} />
          <span className="page-hero__eyebrow">Legal</span>
          <h1 className="page-hero__title">Privacy Policy</h1>
          <p className="page-hero__subtitle">Last updated: July 2026</p>
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="legal-content">
            <p>
              {COMPANY_INFO.name} ("SwiftCargo", "we", "us") respects your privacy. This policy explains what information
              we collect through this website and how we use it. This is a general policy provided for launch and will be
              refined with formal legal guidance as the business grows.
            </p>

            <h2>Information We Collect</h2>
            <ul>
              <li>Contact details you submit through our Quote, Contact, Careers, and Newsletter forms (name, phone, email, addresses).</li>
              <li>Shipment and cargo details submitted when requesting a quote.</li>
              <li>Basic technical information such as browser type, used to keep the site secure and functioning correctly.</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <ul>
              <li>To respond to quote requests, contact messages, and job applications.</li>
              <li>To provide shipment status updates via email or WhatsApp.</li>
              <li>To send occasional newsletter updates, if you have subscribed.</li>
              <li>To improve our services and website based on how they're used.</li>
            </ul>

            <h2>How We Protect Your Information</h2>
            <p>
              We take reasonable technical and organizational measures to protect the information you share with us,
              including restricting internal access to customer data to authorized team members only.
            </p>

            <h2>Third-Party Sharing</h2>
            <p>
              We do not sell your personal information. We may share limited information with service providers who help
              us operate (such as email delivery or hosting providers), strictly to deliver our services to you.
            </p>

            <h2>Your Choices</h2>
            <p>
              You may unsubscribe from newsletter emails at any time, and you may contact us to request that we delete
              information you've submitted, subject to any legal or operational requirements to retain certain records.
            </p>

            <h2>Contact Us</h2>
            <p>
              For any privacy-related questions, contact us at <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a> or {COMPANY_INFO.phone.display}.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
