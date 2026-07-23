import { useState, useEffect } from 'react';
import StatsWidget from '@/components/dashboard/StatsWidget';
import DataTable from '@/components/dashboard/DataTable';
import { getDashboardStats, getAdminQuotes, updateQuoteStatus } from '@/services/api';
import './Dashboard.css';

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [statsData, quotesData] = await Promise.all([
          getDashboardStats(),
          getAdminQuotes(),
        ]);
        setStats(statsData);
        setQuotes(quotesData);
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await updateQuoteStatus(id, newStatus);
      setQuotes(quotes.map((q) => (q.id === id ? { ...q, status: newStatus } : q)));
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  if (loading) {
    return <div className="dashboard">Loading...</div>;
  }

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
    { key: 'status', label: 'Status' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">Dashboard Overview</h1>
        <p className="dashboard__subtitle">Welcome back! Here's what's happening with your logistics operations.</p>
      </div>

      <div className="dashboard__stats">
        <StatsWidget
          label="Total Quotes"
          value={stats.totalQuotes}
          change={stats.confirmedThisWeek}
          trend="up"
        />
        <StatsWidget
          label="Pending Quotes"
          value={stats.pendingQuotes}
          change="8"
          trend="neutral"
        />
        <StatsWidget
          label="Confirmed This Week"
          value={stats.confirmedThisWeek}
          change="12"
          trend="up"
        />
        <StatsWidget
          label="Conversion Rate"
          value={`${stats.conversionRate}%`}
          change="5%"
          trend="up"
        />
      </div>

      <div className="dashboard__table-section">
        <h2 className="dashboard__section-title">Recent Quote Requests</h2>
        <DataTable
          columns={columns}
          data={quotes}
          renderRow={(quote) => (
            <>
              <td>{quote.trackingId}</td>
              <td>
                <div>
                  <div className="font-semibold">{quote.customerName}</div>
                  <div className="text-sm text-gray-500">{quote.phone}</div>
                </div>
              </td>
              <td>{quote.pickup}</td>
              <td>{quote.delivery}</td>
              <td>{quote.cargoType}</td>
              <td>
                <select
                  value={quote.status}
                  onChange={(e) => handleStatusUpdate(quote.id, e.target.value)}
                  className="dashboard__status-select"
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
