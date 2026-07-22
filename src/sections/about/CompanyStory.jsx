import Container from '@/components/layout/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { COMPANY_INFO } from '@/constants/companyInfo';
import teamFleetImage from '@/assets/team-fleet.webp';
import './CompanyStory.css';

export default function CompanyStory() {
  return (
    <section className="section company-story">
      <Container>
        <div className="company-story__grid">
          <div className="company-story__image">
            <img src={teamFleetImage} alt="SwiftCargo team and fleet" className="company-story__img" />
          </div>
          <div className="company-story__content">
            <SectionHeading eyebrow="Our Story" title="From Referrals to a Regional Logistics Partner" />
            <p>
              SwiftCargo Logistics Ltd was founded in Ikeja, Lagos, and has spent the past {new Date().getFullYear() - COMPANY_INFO.founded}+ years
              handling interstate cargo movement, warehousing, and last-mile delivery for businesses that need dependable haulage.
            </p>
            <p>
              Word of mouth and WhatsApp built our client base, but as demand grew from SMEs, e-commerce sellers, and corporate accounts
              across {COMPANY_INFO.serviceAreas.join(', ')}, it became clear we needed a stronger, more professional presence to match the
              quality of service we already deliver on the road and in our warehouse.
            </p>
            <p>
              Today, our team coordinates dispatch, storage, and delivery for a growing base of repeat corporate clients, while staying true
              to the responsive, WhatsApp-first communication that got us here.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
