import SEOHead from '@/components/common/SEOHead';
import Container from '@/components/layout/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { COMPANY_INFO } from '@/constants/companyInfo';

export default function Terms() {
  return (
    <div className="page">
      <SEOHead page="terms" />
      <section className="page-hero">
        <Container>
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Terms & Conditions' }]} />
          <span className="page-hero__eyebrow">Legal</span>
          <h1 className="page-hero__title">Terms & Conditions</h1>
          <p className="page-hero__subtitle">Last updated: July 2026</p>
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="legal-content">
            <p>
              These terms govern your use of the {COMPANY_INFO.name} website and the logistics services we advertise
              through it. By submitting a quote request or using this site, you agree to the terms below.
            </p>

            <h2>Quote Requests & Confirmation</h2>
            <p>
              Submitting a quote request does not guarantee a booking. Pricing and scheduling are confirmed directly with
              our team, typically by phone or WhatsApp. Unconfirmed quote requests may expire after 24 hours.
            </p>

            <h2>Booking & Scheduling</h2>
            <p>
              We do not accept overlapping bookings for the same truck, route, and date. Once a route and date are
              confirmed, changes should be communicated to our operations team as early as possible.
            </p>

            <h2>Payment</h2>
            <p>
              Payment terms are agreed directly with our operations team after a route is confirmed, outside of this
              website. We will provide invoice or account details as part of that process.
            </p>

            <h2>Shipment Liability</h2>
            <p>
              We take reasonable care in handling and transporting all cargo. Specific liability terms for loss or damage
              will be confirmed in writing as part of your service agreement with our team.
            </p>

            <h2>Website Use</h2>
            <p>
              This website is provided for informational purposes and to facilitate quote requests, tracking lookups, and
              job applications. You agree not to misuse the site, including submitting false information or attempting to
              disrupt its normal operation.
            </p>

            <h2>Changes to These Terms</h2>
            <p>
              We may update these terms as our services evolve. Continued use of the website after changes are posted
              constitutes acceptance of the updated terms.
            </p>

            <h2>Contact Us</h2>
            <p>
              Questions about these terms can be sent to <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
