import { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '@/constants/companyInfo';
import { FOOTER_LINKS } from '@/constants/navigation';
import { subscribeNewsletter } from '@/services/api';
import Container from '@/components/layout/Container';
import FormInput from '@/components/forms/FormInput';
import FormStatus from '@/components/forms/FormStatus';
import Button from '@/components/buttons/Button';
import { isRequired, isValidEmail, VALIDATION_MESSAGES } from '@/utils/validators';
import logoSrc from '@/assets/logo.png';
import './Footer.css';

const SOCIAL_ICONS = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.82.97 1.9 1.69 3.12 2.1v4c-1.36-.18-2.65-.77-3.69-1.68-.45-.37-.84-.81-1.15-1.3-.09 3.55.05 7.1-.06 10.65-.18 2.05-1.12 3.99-2.73 5.25-1.92 1.56-4.57 2.1-6.95 1.46-2.52-.66-4.66-2.59-5.46-5.07-.94-2.85-.31-6.14 1.63-8.38 1.62-1.91 4.11-2.95 6.6-2.78v4.03c-1.57-.15-3.17.48-4.06 1.8-.75 1.1-.79 2.6-.08 3.73.66 1.09 1.95 1.76 3.22 1.67 1.57-.02 2.94-1.25 3.13-2.82.11-1.46.03-2.94.05-4.41.01-5.32-.01-10.64.01-15.96z" />
    </svg>
  ),
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!isRequired(email)) {
      setError(VALIDATION_MESSAGES.required);
      return;
    }
    if (!isValidEmail(email)) {
      setError(VALIDATION_MESSAGES.email);
      return;
    }
    setError('');
    setLoading(true);
    setStatus(null);
    try {
      const result = await subscribeNewsletter(email);
      setStatus({ type: 'success', message: result.message });
      setEmail('');
    } catch (err) {
      setStatus({ type: 'error', message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="footer">
      <Container>
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src={logoSrc} alt="SwiftCargo" style={{ borderRadius: '6px', marginRight: '10px', height: '32px', width: '32px', objectFit: 'cover' }} />
              <span className="footer__logo-text">
                SwiftCargo <span className="footer__logo-accent">Logistics</span>
              </span>
            </Link>
            <p className="footer__tagline">{COMPANY_INFO.tagline}</p>
            <p className="footer__description">{COMPANY_INFO.description}</p>
            <div className="footer__social">
              {Object.entries(COMPANY_INFO.social).map(([platform, url]) => {
                const isPlaceholder = platform === 'twitter' || platform === 'tiktok';
                const handleClick = (e) => {
                  if (isPlaceholder) {
                    e.preventDefault();
                    alert("WE WILL ADD THE SOCIAL MEDIA HANDLE LINK WHEN YOU PROVIDE IT TO US MA.");
                  }
                };
                return (
                  <a
                    key={platform}
                    href={isPlaceholder ? '#' : url}
                    target={isPlaceholder ? undefined : "_blank"}
                    rel={isPlaceholder ? undefined : "noopener noreferrer"}
                    aria-label={`Follow us on ${platform}`}
                    className="footer__social-link"
                    title={isPlaceholder ? "WE WILL ADD THE SOCIAL MEDIA HANDLE LINK WHEN YOU PROVIDE IT TO US MA." : undefined}
                    onClick={handleClick}
                  >
                    {SOCIAL_ICONS[platform] || platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer__links-group">
            <h3 className="footer__heading">Company</h3>
            <ul>
              {FOOTER_LINKS.company.map(({ label, path }) => (
                <li key={path}><Link to={path}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__links-group">
            <h3 className="footer__heading">Services</h3>
            <ul>
              {FOOTER_LINKS.services.map(({ label, path }) => (
                <li key={path}><Link to={path}>{label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer__newsletter">
            <h3 className="footer__heading">Stay Updated</h3>
            <p className="footer__newsletter-text">
              Subscribe for logistics updates and promotions.
            </p>
            <form onSubmit={handleSubscribe} className="footer__newsletter-form" noValidate>
              <FormInput
                name="email"
                type="email"
                value={email}
                onChange={(_, val) => setEmail(val)}
                placeholder="Your email address"
                error={error}
                aria-label="Email address"
              />
              <Button type="submit" variant="primary" fullWidth loading={loading}>
                Subscribe
              </Button>
              {status && <FormStatus type={status.type} message={status.message} />}
            </form>

            <div className="footer__contact">
              <a href={COMPANY_INFO.phone.href}>{COMPANY_INFO.phone.display}</a>
              <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
              <address>{COMPANY_INFO.address.full}</address>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
          <div className="footer__legal">
            {FOOTER_LINKS.support.filter((l) => l.path.includes('privacy') || l.path.includes('terms')).map(({ label, path }) => (
              <Link key={path} to={path}>{label}</Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
