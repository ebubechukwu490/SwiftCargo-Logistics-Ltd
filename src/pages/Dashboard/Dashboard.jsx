import { useState } from 'react';
import StatsWidget from '@/components/dashboard/StatsWidget';
import DataTable from '@/components/dashboard/DataTable';
import './Dashboard.css';

export default function Dashboard() {
  const [shipments] = useState([
    { id: 'SC-001', origin: 'Lagos', destination: 'Abuja', status: 'In Transit', date: '2024-07-20' },
    { id: 'SC-002', origin: 'Ibadan', destination: 'Lagos', status: 'Delivered', date: '2024-07-19' },
    { id: 'SC-003', origin: 'Abuja', destination: 'Port Harcourt', status: 'Pending', date: '2024-07-21' },
    { id: 'SC-004', origin: 'Lagos', destination: 'Kano', status: 'In Transit', date: '2024-07-18' },
    { id: 'SC-005', origin: 'Benin', destination: 'Lagos', status: 'Delivered', date: '2024-07-17' },
  ]);

  const stats = [
    { label: 'Total Shipments', value: '1,234', change: '+12%', trend: 'up' },
    { label: 'Active Deliveries', value: '89', change: '+5%', trend: 'up' },
    { label: 'Completed', value: '1,145', change: '+8%', trend: 'up' },
    { label: 'Revenue', value: '₦45.2M', change: '+15%', trend: 'up' },
  ];

  return (
    <div className="dashboard">
      <div className="dashboard__header">
        <h1 className="dashboard__title">Dashboard Overview</h1>
        <p className="dashboard__subtitle">Welcome back! Here's what's happening with your logistics operations.</p>
      </div>

      <div className="dashboard__stats">
        {stats.map((stat, index) => (
          <StatsWidget key={index} {...stat} />
        ))}
      </div>

      <div className="dashboard__table-section">
        <h2 className="dashboard__section-title">Recent Shipments</h2>
        <DataTable
          columns={[
            { key: 'id', label: 'Shipment ID' },
            { key: 'origin', label: 'Origin' },
            { key: 'destination', label: 'Destination' },
            { key: 'status', label: 'Status' },
            { key: 'date', label: 'Date' },
          ]}
          data={shipments}
        />
      </div>
    </div>
  );
}
