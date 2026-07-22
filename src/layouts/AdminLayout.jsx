import { useState } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import DashboardTopbar from '@/components/dashboard/DashboardTopbar';
import { useAuth } from '@/context/AuthContext';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import './AdminLayout.css';

export default function AdminLayout() {
  useScrollToTop();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, isAuthenticated, initializing, logout } = useAuth();
  const navigate = useNavigate();

  if (initializing) return null;

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    logout();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="admin-layout">
      <DashboardSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="admin-layout__main">
        <DashboardTopbar user={user} onMenuClick={() => setSidebarOpen(true)} onLogout={handleLogout} />
        <main className="admin-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
