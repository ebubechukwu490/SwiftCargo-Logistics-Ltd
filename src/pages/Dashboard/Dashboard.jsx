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
          <div className="dashboard__placeholder-icon">🔧</div>
          <h2 className="dashboard__placeholder-title">Backend Integration Pending</h2>
          <p className="dashboard__placeholder-message">
            This feature has been fully prepared on the frontend and will become functional once the backend services are connected.
          </p>
          <div className="dashboard__placeholder-note">
            <p><strong>TODO: Backend developer:</strong></p>
            <ul>
              <li>Connect dashboard stats to the appropriate API endpoint</li>
              <li>Connect shipments table to the appropriate API endpoint</li>
              <li>Replace this placeholder with real data from the server</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
