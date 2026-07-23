import { useState, useEffect } from 'react';
import DataTable from '@/components/dashboard/DataTable';
import './AdminPages.css';

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    // Mock data for now
    const mockData = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@email.com',
        phone: '08012345678',
        subject: 'Inquiry about shipping rates',
        message: 'Hello, I would like to know your shipping rates for moving goods from Lagos to Abuja. Please provide a quote.',
        status: 'unread',
        receivedDate: '2026-07-23',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@email.com',
        phone: '09087654321',
        subject: 'Partnership proposal',
        message: 'We are interested in partnering with SwiftCargo for our logistics needs. Can we schedule a meeting?',
        status: 'read',
        receivedDate: '2026-07-22',
      },
      {
        id: 3,
        name: 'Ahmed Ibrahim',
        email: 'ahmed.ibrahim@email.com',
        phone: '08123456789',
        subject: 'Complaint about delayed delivery',
        message: 'My shipment was supposed to arrive yesterday but it has not been delivered yet. Please check.',
        status: 'replied',
        receivedDate: '2026-07-21',
      },
      {
        id: 4,
        name: 'Chioma Eze',
        email: 'chioma.eze@email.com',
        phone: '07098765432',
        subject: 'Request for bulk shipping',
        message: 'We need to ship bulk items to multiple locations. Can you handle this volume?',
        status: 'unread',
        receivedDate: '2026-07-20',
      },
    ];
    setMessages(mockData);
    setLoading(false);
  };

  const handleStatusUpdate = (id, newStatus) => {
    setMessages(messages.map((m) => (m.id === id ? { ...m, status: newStatus } : m)));
  };

  const filteredMessages = filter === 'all' ? messages : messages.filter((m) => m.status === filter);

  const statusColors = {
    unread: '#ef4444',
    read: '#3b82f6',
    replied: '#10b981',
    archived: '#6b7280',
  };

  const columns = [
    { key: 'name', label: 'Sender' },
    { key: 'subject', label: 'Subject' },
    { key: 'receivedDate', label: 'Date' },
    { key: 'status', label: 'Status' },
  ];

  if (loading) return <div className="admin-page">Loading...</div>;

  return (
    <div className="admin-page">
      <div className="admin-page__header">
        <h1 className="admin-page__title">Contact Messages</h1>
        <p className="admin-page__subtitle">Manage contact form submissions</p>
      </div>

      <div className="admin-page__stats">
        <div className="stat-card">
          <div className="stat-card__value">{messages.length}</div>
          <div className="stat-card__label">Total Messages</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">{messages.filter((m) => m.status === 'unread').length}</div>
          <div className="stat-card__label">Unread</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">{messages.filter((m) => m.status === 'read').length}</div>
          <div className="stat-card__label">Read</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">{messages.filter((m) => m.status === 'replied').length}</div>
          <div className="stat-card__label">Replied</div>
        </div>
      </div>

      <div className="admin-page__filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({messages.length})
        </button>
        <button
          className={`filter-btn ${filter === 'unread' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('unread')}
        >
          Unread ({messages.filter((m) => m.status === 'unread').length})
        </button>
        <button
          className={`filter-btn ${filter === 'read' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('read')}
        >
          Read ({messages.filter((m) => m.status === 'read').length})
        </button>
        <button
          className={`filter-btn ${filter === 'replied' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('replied')}
        >
          Replied ({messages.filter((m) => m.status === 'replied').length})
        </button>
      </div>

      <div className="admin-page__table-section">
        <DataTable
          columns={columns}
          data={filteredMessages}
          renderRow={(msg) => (
            <>
              <td>
                <div>
                  <div className="font-semibold">{msg.name}</div>
                  <div className="text-sm text-gray-500">{msg.email}</div>
                  <div className="text-sm text-gray-500">{msg.phone}</div>
                </div>
              </td>
              <td>
                <div className="font-medium">{msg.subject}</div>
                <div className="text-sm text-gray-500 truncate">{msg.message.substring(0, 50)}...</div>
              </td>
              <td>{msg.receivedDate}</td>
              <td>
                <select
                  value={msg.status}
                  onChange={(e) => handleStatusUpdate(msg.id, e.target.value)}
                  className="admin-page__status-select"
                  style={{ color: statusColors[msg.status] }}
                >
                  <option value="unread">Unread</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                  <option value="archived">Archived</option>
                </select>
              </td>
            </>
          )}
        />
      </div>

      {selectedMessage && (
        <div className="admin-page__modal">
          <div className="admin-page__modal-content">
            <div className="admin-page__modal-header">
              <h3>{selectedMessage.subject}</h3>
              <button onClick={() => setSelectedMessage(null)}>&times;</button>
            </div>
            <div className="admin-page__modal-body">
              <p><strong>From:</strong> {selectedMessage.name}</p>
              <p><strong>Email:</strong> {selectedMessage.email}</p>
              <p><strong>Phone:</strong> {selectedMessage.phone}</p>
              <p><strong>Date:</strong> {selectedMessage.receivedDate}</p>
              <hr />
              <p>{selectedMessage.message}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
