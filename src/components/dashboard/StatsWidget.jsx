import './StatsWidget.css';

export default function StatsWidget({ label, value, change, trend }) {
  return (
    <div className="stats-widget">
      <div className="stats-widget__body">
        <span className="stats-widget__value">{value}</span>
        <span className="stats-widget__label">{label}</span>
        {change && (
          <span className={`stats-widget__trend stats-widget__trend--${trend}`}>
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
