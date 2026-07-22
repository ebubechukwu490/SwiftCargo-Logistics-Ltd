import SEOHead from '@/components/common/SEOHead';
import Container from '@/components/layout/Container';
import Button from '@/components/buttons/Button';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <SEOHead page="notFound" />
      <Container narrow>
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">Page Not Found</h1>
        <p className="not-found__subtitle">
          The page you're looking for doesn't exist or may have moved. Let's get you back on route.
        </p>
        <div className="not-found__actions">
          <Button to="/" variant="primary">Back to Home</Button>
          <Button to="/tracking" variant="outline">Track a Shipment</Button>
        </div>
      </Container>
    </div>
  );
}
