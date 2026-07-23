import { useState, useEffect } from 'react';
import './AdminPages.css';

export default function Subscribers() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSubscribers();
  }, []);

  const loadSubscribers = async () => {
    // Mock data for now
    const mockData = [
      {
        id: 1,
        email: 'john.doe@email.com',
        subscribedDate: '2026-07-23',
        status: 'active',
      },
      {
        id: 2,
        email: 'jane.smith@email.com',
        subscribedDate: '2026-07-22',
        status: 'active',
      },
      {
        id: 3,
        email: 'ahmed.ibrahim@email.com',
        subscribedDate: '2026-07-21',
        status: 'active',
      },
      {
        id: 4,
        email: 'chioma.eze@email.com',
        subscribedDate: '2026-07-20',
        status: 'unsubscribed',
      },
      {
        id: 5,
        email: 'emeka.nwosu@email.com',
        subscribedDate: '2026-07-19',
        status: 'active',
      },
      {
        id: 6,
        email: 'fatima.yusuf@email.com',
        subscribedDate: '2026-07-18',
        status: 'active',
      },
    ];
    setSubscribers(mockData);
    setLoading(false);
  };

  const handleStatusUpdate = (id, newStatus) => {
    setSubscribers(subscribers.map((s) => (s.id === id ? { ...s, status: newStatus } : s)));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this subscriber?')) {
      setSubscribers(subscribers.filter((s) => s.id !== id));
    }
  };

  const statusColors = {
    active: { bg: '#d1fae5', text: '#065f46' },
    unsubscribed: { bg: '#fee2e2', text: '#991b1b' },
  };

  if (loading) return <div className="admin-page">Loading...</div>;

  return (
    <div className="admin-page">
      <div className="admin-page__header">
        <h1 className="admin-page__title">Newsletter Subscribers</h1>
        <p className="admin-page__subtitle">Manage newsletter subscriptions</p>
      </div>

      <div className="admin-page__stats">
        <div className="stat-card">
          <div className="stat-card__value">{subscribers.length}</div>
          <div className="stat-card__label">Total Subscribers</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">{subscribers.filter((s) => s.status === 'active').length}</div>
          <div className="stat-card__label">Active</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">{subscribers.filter((s) => s.status === 'unsubscribed').length}</div>
          <div className="stat-card__label">Unsubscribed</div>
        </div>
      </div>

      <div className="admin-page__cards-grid">
        {subscribers.map((subscriber) => (
          <div key={subscriber.id} className="admin-card">
            <div className="admin-card__header">
              <div>
                <div className="admin-card__title">{subscriber.email}</div>
                <div className="admin-card__subtitle">Subscriber</div>
              </div>
              <span
                className="admin-card__status"
                style={{ backgroundColor: statusColors[subscriber.status].bg, color: statusColors[subscriber.status].text }}
              >
                {subscriber.status}
              </span>
            </div>
            <div className="admin-card__body">
              <div className="admin-card__field">
                <span className="admin-card__label">Subscribed Date</span>
                <span className="admin-card__value">{subscriber.subscribedDate}</span>
              </div>
            </div>
            <div className="admin-card__actions">
              <select
                value={subscriber.status}
                onChange={(e) => handleStatusUpdate(subscriber.id, e.target.value)}
                className="admin-page__status-select"
              >
                <option value="active">Active</option>
                <option value="unsubscribed">Unsubscribed</option>
              </select>
              <button
                onClick={() => handleDelete(subscriber.id)}
                className="admin-card__btn admin-card__btn--danger"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
