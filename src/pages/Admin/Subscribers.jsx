import { useState, useEffect } from 'react';
import DataTable from '@/components/dashboard/DataTable';
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
    active: '#10b981',
    unsubscribed: '#ef4444',
  };

  const columns = [
    { key: 'email', label: 'Email Address' },
    { key: 'subscribedDate', label: 'Subscribed Date' },
    { key: 'status', label: 'Status' },
    { key: 'actions', label: 'Actions' },
  ];

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

      <div className="admin-page__table-section">
        <DataTable
          columns={columns}
          data={subscribers}
          renderRow={(subscriber) => (
            <>
              <td className="font-semibold">{subscriber.email}</td>
              <td>{subscriber.subscribedDate}</td>
              <td>
                <select
                  value={subscriber.status}
                  onChange={(e) => handleStatusUpdate(subscriber.id, e.target.value)}
                  className="admin-page__status-select"
                  style={{ color: statusColors[subscriber.status] }}
                >
                  <option value="active">Active</option>
                  <option value="unsubscribed">Unsubscribed</option>
                </select>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(subscriber.id)}
                  className="admin-page__delete-btn"
                >
                  Delete
                </button>
              </td>
            </>
          )}
        />
      </div>
    </div>
  );
}
