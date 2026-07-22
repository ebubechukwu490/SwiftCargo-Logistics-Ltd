import { useState } from 'react';
import { lookupTracking } from '@/services/api';
import FormInput from '@/components/forms/FormInput';
import Button from '@/components/buttons/Button';
import './TrackingLookup.css';

export default function TrackingLookup({ onResult }) {
  const [trackingId, setTrackingId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!trackingId.trim()) {
      setError('This field is required.');
      return;
    }
    setError('');
    setLoading(true);
    onResult(null, null);
    try {
      const result = await lookupTracking(trackingId);
      onResult(result, null);
    } catch (err) {
      onResult(null, err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="tracking-lookup" noValidate>
      <FormInput
        label="Tracking ID"
        name="trackingId"
        placeholder="e.g. SWC-2026-00142"
        value={trackingId}
        onChange={(_, val) => setTrackingId(val)}
        error={error}
      />
      <Button type="submit" variant="primary" fullWidth loading={loading}>Track Shipment</Button>
    </form>
  );
}
