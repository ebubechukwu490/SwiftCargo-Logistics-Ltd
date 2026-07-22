import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import AdminLayout from '@/layouts/AdminLayout';
import Loader from '@/components/ui/Loader';

const Home = lazy(() => import('@/pages/Home/Home'));
const About = lazy(() => import('@/pages/About/About'));
const Services = lazy(() => import('@/pages/Services/Services'));
const Gallery = lazy(() => import('@/pages/Gallery/Gallery'));
const Testimonials = lazy(() => import('@/pages/Testimonials/Testimonials'));
const Careers = lazy(() => import('@/pages/Careers/Careers'));
const Contact = lazy(() => import('@/pages/Contact/Contact'));
const Quote = lazy(() => import('@/pages/Quote/Quote'));
const Tracking = lazy(() => import('@/pages/Tracking/Tracking'));
const Privacy = lazy(() => import('@/pages/Privacy/Privacy'));
const Terms = lazy(() => import('@/pages/Terms/Terms'));
const Login = lazy(() => import('@/pages/Login/Login'));
const Dashboard = lazy(() => import('@/pages/Dashboard/Dashboard'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

function PageLoader() {
  return (
    <div className="route-loader">
      <Loader size="lg" />
    </div>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="quote" element={<Quote />} />
            <Route path="tracking" element={<Tracking />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
          </Route>

          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
