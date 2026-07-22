import { Link } from 'react-router-dom';
import { NAV_LINKS, NAV_CTA } from '@/constants/navigation';
import Button from '@/components/buttons/Button';
import './MobileMenu.css';

export default function MobileMenu({ isOpen, onClose, isActive }) {
  return (
    <>
      <div
        className={`mobile-menu__backdrop ${isOpen ? 'mobile-menu__backdrop--open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        id="mobile-menu"
        className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <ul className="mobile-menu__links">
          {NAV_LINKS.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`mobile-menu__link ${isActive(path) ? 'mobile-menu__link--active' : ''}`}
                onClick={onClose}
                aria-current={isActive(path) ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-menu__actions">
          <Button to={NAV_CTA.secondary.path} variant="outline" fullWidth onClick={onClose}>
            {NAV_CTA.secondary.label}
          </Button>
          <Button to={NAV_CTA.primary.path} variant="primary" fullWidth onClick={onClose}>
            {NAV_CTA.primary.label}
          </Button>
        </div>
      </nav>
    </>
  );
}
