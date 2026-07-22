import { COMPANY_INFO } from '@/constants/companyInfo';
import './ContactInfo.css';

export default function ContactInfo() {
  return (
    <div className="contact-info">
      <div className="contact-info__item">
        <span className="contact-info__label">Office Address</span>
        <address>{COMPANY_INFO.address.full}</address>
      </div>
      <div className="contact-info__item">
        <span className="contact-info__label">Phone</span>
        <a href={COMPANY_INFO.phone.href}>{COMPANY_INFO.phone.display}</a>
      </div>
      <div className="contact-info__item">
        <span className="contact-info__label">Email</span>
        <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
      </div>
      <div className="contact-info__item">
        <span className="contact-info__label">Business Hours</span>
        <p>{COMPANY_INFO.hours.weekdays}</p>
        <p>{COMPANY_INFO.hours.saturday}</p>
        <p>{COMPANY_INFO.hours.sunday}</p>
      </div>
      <div className="contact-info__item">
        <span className="contact-info__label">Follow Us</span>
        <div className="contact-info__social">
          {Object.entries(COMPANY_INFO.social).map(([platform, url]) => (
            <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
