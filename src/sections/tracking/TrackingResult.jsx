import StatusBadge from '@/components/ui/StatusBadge';
import { TRACKING_STATUSES, TRACKING_STEPS } from '@/constants/tracking';
import { formatDateTime } from '@/utils/formatters';
import './TrackingResult.css';

export default function TrackingResult({ result }) {
  const statusInfo = TRACKING_STATUSES[result.status];
  const currentStepIndex = TRACKING_STEPS.findIndex((s) => s.key === result.status);

  return (
    <div className="tracking-result">
      <div className="tracking-result__header">
        <div>
          <span className="tracking-result__id">{result.trackingId}</span>
          <p className="tracking-result__route">{result.pickup} → {result.delivery}</p>
        </div>
        <StatusBadge status={result.status} label={statusInfo.label} />
      </div>

      <p className="tracking-result__description">{statusInfo.description}</p>

      {currentStepIndex >= 0 && (
        <div className="tracking-result__progress">
          {TRACKING_STEPS.map((step, index) => (
            <div
              key={step.key}
              className={`tracking-result__step ${index <= currentStepIndex ? 'tracking-result__step--done' : ''}`}
            >
              <span className="tracking-result__dot" aria-hidden="true" />
              <span className="tracking-result__step-label">{step.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="tracking-result__meta">
        <div>
          <span>Cargo Type</span>
          <p>{result.cargoType}</p>
        </div>
        <div>
          <span>Estimated Delivery</span>
          <p>{result.estimatedDelivery}</p>
        </div>
        <div>
          <span>Last Updated</span>
          <p>{formatDateTime(result.lastUpdated)}</p>
        </div>
      </div>

      {result.timeline?.length > 0 && (
        <div className="tracking-result__timeline">
          <h3>Shipment History</h3>
          <ul>
            {[...result.timeline].reverse().map((entry, i) => (
              <li key={i}>
                <span className="tracking-result__timeline-date">{formatDateTime(entry.date)}</span>
                <span className="tracking-result__timeline-note">{entry.note}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
