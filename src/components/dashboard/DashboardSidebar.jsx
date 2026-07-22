import { NavLink } from 'react-router-dom';
import { COMPANY_INFO } from '@/constants/companyInfo';
import logoSrc from '@/assets/logo.png';
import './DashboardSidebar.css';

const NAV_ITEMS = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: 'grid' },
];

const ICONS = {
  grid: <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />,
  list: <path d="M4 6h16M4 12h16M4 18h10" />,
  truck: <path d="M3 7h11v8H3V7zm11 3h4l3 3v2h-7v-5zM6 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />,
};

export default function DashboardSidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="dashboard-sidebar__scrim" onClick={onClose} aria-hidden="true" />}
      <aside className={`dashboard-sidebar ${isOpen ? 'dashboard-sidebar--open' : ''}`}>
        <div className="dashboard-sidebar__brand">
          <img src={logoSrc} alt={COMPANY_INFO.name} style={{ borderRadius: '6px', objectFit: 'cover', height: '24px', width: '24px', marginRight: '8px' }} />
          <span>Ops Dashboard</span>
        </div>
        <nav className="dashboard-sidebar__nav" aria-label="Dashboard navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/admin/dashboard'}
              className={({ isActive }) => `dashboard-sidebar__link ${isActive ? 'dashboard-sidebar__link--active' : ''}`}
              onClick={onClose}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {ICONS[item.icon]}
              </svg>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="dashboard-sidebar__footer">
          <NavLink to="/" className="dashboard-sidebar__link">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M10 19l-7-7 7-7M3 12h18" />
            </svg>
            Back to Website
          </NavLink>
        </div>
      </aside>
    </>
  );
}
