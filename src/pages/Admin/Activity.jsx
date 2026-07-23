import './AdminPages.css';

export default function Activity() {
  return (
    <div className="admin-page">
      <div className="admin-page__header">
        <h1 className="admin-page__title">Activity Log</h1>
        <p className="admin-page__subtitle">Track all system activities and user actions</p>
      </div>

      <div className="admin-page__empty-state">
        <div className="empty-state__icon">📋</div>
        <h2 className="empty-state__title">No Data Available</h2>
        <p className="empty-state__message">
          Backend integration has not been completed yet. Submitted quotes, applications, inquiries/messages and other records will appear here once the backend is connected.
        </p>
      </div>
    </div>
  );
}
