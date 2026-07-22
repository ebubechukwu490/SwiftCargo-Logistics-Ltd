import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_LINKS, NAV_CTA } from '@/constants/navigation';
import { COMPANY_INFO } from '@/constants/companyInfo';
import Button from '@/components/buttons/Button';
import MobileMenu from './MobileMenu';
/* Replace logo.svg with logo.png when client supplies final logo file */
import logoSrc from '@/assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="navbar">
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" aria-label={`${COMPANY_INFO.name} | Home`}>
          <img
            src={logoSrc}
            alt="SwiftCargo"
            className="navbar__logo-img"
            style={{ borderRadius: '8px', marginRight: '10px', height: '36px', width: '36px', objectFit: 'cover' }}
          />
          <span className="navbar__logo-text">
            SwiftCargo <span className="navbar__logo-accent">Logistics</span>
          </span>
        </Link>

        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__links">
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`navbar__link ${isActive(path) ? 'navbar__link--active' : ''}`}
                  aria-current={isActive(path) ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar__actions">
          <Link to={NAV_CTA.secondary.path} className="navbar__track-link">
            {NAV_CTA.secondary.label}
          </Link>
          <Button to={NAV_CTA.primary.path} variant="primary" size="sm">
            {NAV_CTA.primary.label}
          </Button>
        </div>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} isActive={isActive} />
    </header>
  );
}
