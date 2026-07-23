import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">Dashboard Overview</h1>
        <p className="dashboard__subtitle">Welcome back! Here's what's happening with your logistics operations.</p>
      </div>

      <div className="dashboard__placeholder">
        <div className="dashboard__placeholder-content">
          <div className="dashboard__placeholder-icon">📊</div>
          <h2 className="dashboard__placeholder-title">No Data Available</h2>
          <p className="dashboard__placeholder-message">
            Backend integration has not been completed yet. Submitted quotes, applications, inquiries/messages and other records will appear here once the backend is connected.
          </p>
        </div>
      </div>
    </div>
  );
}
