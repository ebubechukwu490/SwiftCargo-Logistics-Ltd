import { useState } from 'react';
import SEOHead from '@/components/common/SEOHead';
import Container from '@/components/layout/Container';
import Breadcrumb from '@/components/ui/Breadcrumb';
import TrackingLookup from '@/sections/tracking/TrackingLookup';
import TrackingResult from '@/sections/tracking/TrackingResult';
import FormStatus from '@/components/forms/FormStatus';
import './Tracking.css';

export default function Tracking() {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleResult = (data, err) => {
    setResult(data);
    setError(err);
  };

  return (
    <div className="page">
      <SEOHead page="tracking" />
      <section className="page-hero">
        <Container>
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Track Shipment' }]} />
          <span className="page-hero__eyebrow">Shipment Tracking</span>
          <h1 className="page-hero__title">Check Your Shipment Status</h1>
          <p className="page-hero__subtitle">
            Enter the tracking ID you received after your quote was confirmed to see live status updates.
          </p>
        </Container>
      </section>
      <section className="section">
        <Container>
          <TrackingLookup onResult={handleResult} />
          {error && (
            <div className="tracking-page__error">
              <FormStatus type="error" message={error} />
            </div>
          )}
          {result && <TrackingResult result={result} />}
        </Container>
      </section>
    </div>
  );
}
