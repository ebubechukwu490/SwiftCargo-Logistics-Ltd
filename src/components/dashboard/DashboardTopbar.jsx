import './DashboardTopbar.css';

export default function DashboardTopbar({ user, onMenuClick, onLogout }) {
  return (
    <header className="dashboard-topbar">
      <button
        type="button"
        className="dashboard-topbar__menu-btn"
        aria-label="Open sidebar menu"
        onClick={onMenuClick}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="dashboard-topbar__title">
        <h1>Operations Dashboard</h1>
      </div>

      <div className="dashboard-topbar__user">
        <div className="dashboard-topbar__avatar" aria-hidden="true">
          {user?.name?.charAt(0) || 'O'}
        </div>
        <div className="dashboard-topbar__user-info">
          <span className="dashboard-topbar__user-name">{user?.name || 'Operations Manager'}</span>
          <span className="dashboard-topbar__user-role">{user?.role === 'owner' ? 'Owner' : 'Ops Manager'}</span>
        </div>
        <button type="button" className="dashboard-topbar__logout" onClick={onLogout}>
          Log Out
        </button>
      </div>
    </header>
  );
}
