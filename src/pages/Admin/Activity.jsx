import { useState, useEffect } from 'react';
import './AdminPages.css';

export default function Activity() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadActivities();
  }, []);

  const loadActivities = async () => {
    // Mock data for now
    const mockData = [
      {
        id: 1,
        action: 'New quote submitted',
        user: 'Chidi Okafor',
        details: 'Quote request SWC-2026-00142 submitted for Lagos to Abuja',
        timestamp: '2026-07-23 10:30 AM',
        type: 'quote',
      },
      {
        id: 2,
        action: 'Status updated',
        user: 'Admin',
        details: 'Quote SWC-2026-00089 status changed to confirmed',
        timestamp: '2026-07-23 09:45 AM',
        type: 'status',
      },
      {
        id: 3,
        action: 'New application received',
        user: 'Chinedu Okafor',
        details: 'Applied for Logistics Coordinator position',
        timestamp: '2026-07-23 08:15 AM',
        type: 'application',
      },
      {
        id: 4,
        action: 'Contact message received',
        user: 'John Doe',
        details: 'Inquiry about shipping rates',
        timestamp: '2026-07-22 04:30 PM',
        type: 'message',
      },
      {
        id: 5,
        action: 'Newsletter subscription',
        user: 'jane.smith@email.com',
        details: 'Subscribed to newsletter',
        timestamp: '2026-07-22 03:20 PM',
        type: 'subscription',
      },
      {
        id: 6,
        action: 'Status updated',
        user: 'Admin',
        details: 'Quote SWC-2026-00156 status changed to in_transit',
        timestamp: '2026-07-22 02:10 PM',
        type: 'status',
      },
      {
        id: 7,
        action: 'Application reviewed',
        user: 'Admin',
        details: 'Amina Bello application marked as reviewed',
        timestamp: '2026-07-22 11:00 AM',
        type: 'application',
      },
      {
        id: 8,
        action: 'Message replied',
        user: 'Admin',
        details: 'Replied to Ahmed Ibrahim about delayed delivery',
        timestamp: '2026-07-21 05:45 PM',
        type: 'message',
      },
    ];
    setActivities(mockData);
    setLoading(false);
  };

  const filteredActivities = filter === 'all' ? activities : activities.filter((a) => a.type === filter);

  const typeColors = {
    quote: '#3b82f6',
    status: '#10b981',
    application: '#8b5cf6',
    message: '#f59e0b',
    subscription: '#ec4899',
  };

  const typeLabels = {
    quote: 'Quote',
    status: 'Status',
    application: 'Application',
    message: 'Message',
    subscription: 'Subscription',
  };

  if (loading) return <div className="admin-page">Loading...</div>;

  return (
    <div className="admin-page">
      <div className="admin-page__header">
        <h1 className="admin-page__title">Activity Log</h1>
        <p className="admin-page__subtitle">Track all system activities and user actions</p>
      </div>

      <div className="admin-page__stats">
        <div className="stat-card">
          <div className="stat-card__value">{activities.length}</div>
          <div className="stat-card__label">Total Activities</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">{activities.filter((a) => a.type === 'quote').length}</div>
          <div className="stat-card__label">Quote Activities</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">{activities.filter((a) => a.type === 'application').length}</div>
          <div className="stat-card__label">Applications</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">{activities.filter((a) => a.type === 'message').length}</div>
          <div className="stat-card__label">Messages</div>
        </div>
      </div>

      <div className="admin-page__filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({activities.length})
        </button>
        <button
          className={`filter-btn ${filter === 'quote' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('quote')}
        >
          Quotes ({activities.filter((a) => a.type === 'quote').length})
        </button>
        <button
          className={`filter-btn ${filter === 'application' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('application')}
        >
          Applications ({activities.filter((a) => a.type === 'application').length})
        </button>
        <button
          className={`filter-btn ${filter === 'message' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('message')}
        >
          Messages ({activities.filter((a) => a.type === 'message').length})
        </button>
        <button
          className={`filter-btn ${filter === 'subscription' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('subscription')}
        >
          Subscriptions ({activities.filter((a) => a.type === 'subscription').length})
        </button>
      </div>

      <div className="admin-page__activity-list">
        {filteredActivities.map((activity) => (
          <div key={activity.id} className="activity-item">
            <div className="activity-item__icon" style={{ backgroundColor: typeColors[activity.type] }}>
              {activity.type === 'quote' && '📦'}
              {activity.type === 'status' && '✓'}
              {activity.type === 'application' && '👤'}
              {activity.type === 'message' && '✉️'}
              {activity.type === 'subscription' && '🔔'}
            </div>
            <div className="activity-item__content">
              <div className="activity-item__header">
                <span className="activity-item__action">{activity.action}</span>
                <span className="activity-item__timestamp">{activity.timestamp}</span>
              </div>
              <div className="activity-item__user">by {activity.user}</div>
              <div className="activity-item__details">{activity.details}</div>
              <span className="activity-item__type" style={{ color: typeColors[activity.type] }}>
                {typeLabels[activity.type]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
