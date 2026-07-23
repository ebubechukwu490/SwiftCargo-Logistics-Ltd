import { NavLink } from 'react-router-dom';
import { COMPANY_INFO } from '@/constants/companyInfo';
import logoSrc from '@/assets/logo.png';
import './DashboardSidebar.css';

const NAV_ITEMS = [
  { label: 'Dashboard', path: '/admin/dashboard', icon: 'grid' },
  { label: 'Quotes', path: '/admin/quotes', icon: 'truck' },
  { label: 'Applications', path: '/admin/applications', icon: 'users' },
  { label: 'Messages', path: '/admin/messages', icon: 'mail' },
  { label: 'Subscribers', path: '/admin/subscribers', icon: 'bell' },
  { label: 'Activity', path: '/admin/activity', icon: 'activity' },
  { label: 'Settings', path: '/admin/settings', icon: 'settings' },
];

const ICONS = {
  grid: <path d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 0h6v6h-6v-6z" />,
  truck: <path d="M3 7h11v8H3V7zm11 3h4l3 3v2h-7v-5zM6 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />,
  users: <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100-8 4 4 0 000 8zm10 2a4 4 0 100-8 4 4 0 000 8zm0 4v2m0-2h2m-2 0h-2" />,
  mail: <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2l8 5 8-5M4 6v12h16V6" />,
  bell: <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0" />,
  activity: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  settings: <path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.09a2 2 0 01-1-1.74v-.47a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2zM12 12a2 2 0 100-4 2 2 0 000 4z" />,
};

export default function DashboardSidebar({ isOpen, onClose }) {
  return (
    <>
      {isOpen && <div className="dashboard-sidebar__scrim" onClick={onClose} aria-hidden="true" />}
      <aside className={`dashboard-sidebar ${isOpen ? 'dashboard-sidebar--open' : ''}`}>
        <div className="dashboard-sidebar__brand">
          <img src={logoSrc} alt={COMPANY_INFO.name} className="dashboard-sidebar__logo" />
          <span className="dashboard-sidebar__brand-text">{COMPANY_INFO.name}</span>
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
