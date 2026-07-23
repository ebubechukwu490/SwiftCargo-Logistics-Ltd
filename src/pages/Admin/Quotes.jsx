import { useState, useEffect } from 'react';
import { getAdminQuotes, updateQuoteStatus } from '@/services/api';
import './AdminPages.css';

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadQuotes();
  }, []);

  const loadQuotes = async () => {
    try {
      const data = await getAdminQuotes();
      setQuotes(data);
    } catch (error) {
      console.error('Failed to load quotes:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await updateQuoteStatus(id, newStatus);
      setQuotes(quotes.map((q) => (q.id === id ? { ...q, status: newStatus } : q)));
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  const filteredQuotes = filter === 'all' ? quotes : quotes.filter((q) => q.status === filter);

  const statusColors = {
    pending: { bg: '#fef3c7', text: '#92400e' },
    confirmed: { bg: '#d1fae5', text: '#065f46' },
    in_transit: { bg: '#dbeafe', text: '#1e40af' },
    expired: { bg: '#fee2e2', text: '#991b1b' },
  };

  if (loading) return <div className="admin-page">Loading...</div>;

  return (
    <div className="admin-page">
      <div className="admin-page__header">
        <h1 className="admin-page__title">Quote Management</h1>
        <p className="admin-page__subtitle">Monitor and manage all quote requests</p>
      </div>

      <div className="admin-page__filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({quotes.length})
        </button>
        <button
          className={`filter-btn ${filter === 'pending' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('pending')}
        >
          Pending ({quotes.filter((q) => q.status === 'pending').length})
        </button>
        <button
          className={`filter-btn ${filter === 'confirmed' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('confirmed')}
        >
          Confirmed ({quotes.filter((q) => q.status === 'confirmed').length})
        </button>
        <button
          className={`filter-btn ${filter === 'in_transit' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('in_transit')}
        >
          In Transit ({quotes.filter((q) => q.status === 'in_transit').length})
        </button>
        <button
          className={`filter-btn ${filter === 'expired' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('expired')}
        >
          Expired ({quotes.filter((q) => q.status === 'expired').length})
        </button>
      </div>

      <div className="admin-page__cards-grid">
        {filteredQuotes.map((quote) => (
          <div key={quote.id} className="admin-card">
            <div className="admin-card__header">
              <div>
                <div className="admin-card__title">{quote.trackingId}</div>
                <div className="admin-card__subtitle">{quote.customerName}</div>
              </div>
              <span
                className="admin-card__status"
                style={{ backgroundColor: statusColors[quote.status].bg, color: statusColors[quote.status].text }}
              >
                {quote.status.replace('_', ' ')}
              </span>
            </div>
            <div className="admin-card__body">
              <div className="admin-card__field">
                <span className="admin-card__label">Phone</span>
                <span className="admin-card__value">{quote.phone}</span>
              </div>
              <div className="admin-card__field">
                <span className="admin-card__label">Pickup Location</span>
                <span className="admin-card__value">{quote.pickup}</span>
              </div>
              <div className="admin-card__field">
                <span className="admin-card__label">Delivery Location</span>
                <span className="admin-card__value">{quote.delivery}</span>
              </div>
              <div className="admin-card__field">
                <span className="admin-card__label">Cargo Type</span>
                <span className="admin-card__value">{quote.cargoType}</span>
              </div>
              <div className="admin-card__field">
                <span className="admin-card__label">Preferred Date</span>
                <span className="admin-card__value">{quote.preferredDate}</span>
              </div>
            </div>
            <div className="admin-card__actions">
              <select
                value={quote.status}
                onChange={(e) => handleStatusUpdate(quote.id, e.target.value)}
                className="admin-page__status-select"
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="in_transit">In Transit</option>
                <option value="expired">Expired</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
