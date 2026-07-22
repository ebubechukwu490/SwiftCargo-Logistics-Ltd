import './StatsWidget.css';

export default function StatsWidget({ label, value, icon, trend }) {
  return (
    <div className="stats-widget">
      <div className="stats-widget__icon" aria-hidden="true">{icon}</div>
      <div className="stats-widget__body">
        <span className="stats-widget__value">{value}</span>
        <span className="stats-widget__label">{label}</span>
        {trend && <span className={`stats-widget__trend stats-widget__trend--${trend.direction}`}>{trend.text}</span>}
      </div>
    </div>
  );
}
