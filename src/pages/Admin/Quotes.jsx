import { useState, useEffect } from 'react';
import DataTable from '@/components/dashboard/DataTable';
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
    pending: '#f59e0b',
    confirmed: '#10b981',
    in_transit: '#3b82f6',
    expired: '#ef4444',
  };

  const columns = [
    { key: 'trackingId', label: 'Tracking ID' },
    { key: 'customerName', label: 'Customer' },
    { key: 'pickup', label: 'Pickup' },
    { key: 'delivery', label: 'Delivery' },
    { key: 'cargoType', label: 'Cargo Type' },
    { key: 'preferredDate', label: 'Preferred Date' },
    { key: 'status', label: 'Status' },
  ];

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

      <div className="admin-page__table-section">
        <DataTable
          columns={columns}
          data={filteredQuotes}
          renderRow={(quote) => (
            <>
              <td><strong>{quote.trackingId}</strong></td>
              <td>
                <div>
                  <div className="font-semibold">{quote.customerName}</div>
                  <div className="text-sm text-gray-500">{quote.phone}</div>
                </div>
              </td>
              <td>{quote.pickup}</td>
              <td>{quote.delivery}</td>
              <td>{quote.cargoType}</td>
              <td>{quote.preferredDate}</td>
              <td>
                <select
                  value={quote.status}
                  onChange={(e) => handleStatusUpdate(quote.id, e.target.value)}
                  className="admin-page__status-select"
                  style={{ color: statusColors[quote.status] }}
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="in_transit">In Transit</option>
                  <option value="expired">Expired</option>
                </select>
              </td>
            </>
          )}
        />
      </div>
    </div>
  );
}
