import { Outlet } from 'react-router-dom';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/common/WhatsAppButton';
import CookieConsent from '@/components/common/CookieConsent';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import './MainLayout.css';

export default function MainLayout() {
  useScrollToTop();

  return (
    <div className="main-layout">
      <Navbar />
      <main id="main-content" className="main-layout__content">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
}
