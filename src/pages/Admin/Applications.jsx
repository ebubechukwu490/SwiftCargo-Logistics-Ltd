import { useState, useEffect } from 'react';
import DataTable from '@/components/dashboard/DataTable';
import './AdminPages.css';

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    // Mock data for now
    const mockData = [
      {
        id: 1,
        name: 'Chinedu Okafor',
        email: 'chinedu.okafor@email.com',
        phone: '08032147765',
        position: 'Logistics Coordinator',
        experience: '3 years',
        status: 'pending',
        appliedDate: '2026-07-20',
        coverLetter: 'Experienced logistics professional seeking to join your team...',
      },
      {
        id: 2,
        name: 'Amina Bello',
        email: 'amina.bello@email.com',
        phone: '08099887766',
        position: 'Warehouse Manager',
        experience: '5 years',
        status: 'reviewed',
        appliedDate: '2026-07-19',
        coverLetter: 'Warehouse management expert with proven track record...',
      },
      {
        id: 3,
        name: 'Emeka Nwosu',
        email: 'emeka.nwosu@email.com',
        phone: '08155443322',
        position: 'Driver',
        experience: '7 years',
        status: 'interviewed',
        appliedDate: '2026-07-18',
        coverLetter: 'Professional driver with excellent safety record...',
      },
      {
        id: 4,
        name: 'Fatima Yusuf',
        email: 'fatima.yusuf@email.com',
        phone: '07011223344',
        position: 'Customer Service',
        experience: '2 years',
        status: 'rejected',
        appliedDate: '2026-07-17',
        coverLetter: 'Customer service specialist with great communication skills...',
      },
    ];
    setApplications(mockData);
    setLoading(false);
  };

  const handleStatusUpdate = (id, newStatus) => {
    setApplications(applications.map((a) => (a.id === id ? { ...a, status: newStatus } : a)));
  };

  const filteredApplications = filter === 'all' ? applications : applications.filter((a) => a.status === filter);

  const statusColors = {
    pending: '#f59e0b',
    reviewed: '#3b82f6',
    interviewed: '#8b5cf6',
    rejected: '#ef4444',
    hired: '#10b981',
  };

  const columns = [
    { key: 'name', label: 'Applicant' },
    { key: 'position', label: 'Position' },
    { key: 'experience', label: 'Experience' },
    { key: 'appliedDate', label: 'Applied Date' },
    { key: 'status', label: 'Status' },
  ];

  if (loading) return <div className="admin-page">Loading...</div>;

  return (
    <div className="admin-page">
      <div className="admin-page__header">
        <h1 className="admin-page__title">Career Applications</h1>
        <p className="admin-page__subtitle">Manage job applications and recruitment process</p>
      </div>

      <div className="admin-page__stats">
        <div className="stat-card">
          <div className="stat-card__value">{applications.length}</div>
          <div className="stat-card__label">Total Applications</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">{applications.filter((a) => a.status === 'pending').length}</div>
          <div className="stat-card__label">Pending Review</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">{applications.filter((a) => a.status === 'interviewed').length}</div>
          <div className="stat-card__label">Interview Scheduled</div>
        </div>
        <div className="stat-card">
          <div className="stat-card__value">{applications.filter((a) => a.status === 'hired').length}</div>
          <div className="stat-card__label">Hired</div>
        </div>
      </div>

      <div className="admin-page__filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All ({applications.length})
        </button>
        <button
          className={`filter-btn ${filter === 'pending' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('pending')}
        >
          Pending ({applications.filter((a) => a.status === 'pending').length})
        </button>
        <button
          className={`filter-btn ${filter === 'reviewed' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('reviewed')}
        >
          Reviewed ({applications.filter((a) => a.status === 'reviewed').length})
        </button>
        <button
          className={`filter-btn ${filter === 'interviewed' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('interviewed')}
        >
          Interviewed ({applications.filter((a) => a.status === 'interviewed').length})
        </button>
        <button
          className={`filter-btn ${filter === 'hired' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('hired')}
        >
          Hired ({applications.filter((a) => a.status === 'hired').length})
        </button>
      </div>

      <div className="admin-page__table-section">
        <DataTable
          columns={columns}
          data={filteredApplications}
          renderRow={(app) => (
            <>
              <td>
                <div>
                  <div className="font-semibold">{app.name}</div>
                  <div className="text-sm text-gray-500">{app.email}</div>
                  <div className="text-sm text-gray-500">{app.phone}</div>
                </div>
              </td>
              <td>{app.position}</td>
              <td>{app.experience}</td>
              <td>{app.appliedDate}</td>
              <td>
                <select
                  value={app.status}
                  onChange={(e) => handleStatusUpdate(app.id, e.target.value)}
                  className="admin-page__status-select"
                  style={{ color: statusColors[app.status] }}
                >
                  <option value="pending">Pending</option>
                  <option value="reviewed">Reviewed</option>
                  <option value="interviewed">Interviewed</option>
                  <option value="hired">Hired</option>
                  <option value="rejected">Rejected</option>
                </select>
              </td>
            </>
          )}
        />
      </div>
    </div>
  );
}
