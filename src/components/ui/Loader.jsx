import './Loader.css';

export default function Loader({ size = 'md', label = 'Loading...' }) {
  return (
    <div className={`loader loader--${size}`} role="status" aria-label={label}>
      <span className="loader__spinner" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </div>
  );
}

export function Skeleton({ width = '100%', height = '16px', className }) {
  return (
    <div
      className={`skeleton ${className || ''}`}
      style={{ width, height }}
      aria-hidden="true"
    />
  );
}
