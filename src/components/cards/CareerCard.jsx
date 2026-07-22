import Button from '@/components/buttons/Button';
import StatusBadge from '@/components/ui/StatusBadge';
import './CareerCard.css';

export default function CareerCard({ career, onApply }) {
  const { title, department, location, type, description, active } = career;

  return (
    <article className="career-card">
      <div className="career-card__header">
        <div>
          <h3 className="career-card__title">{title}</h3>
          <div className="career-card__meta">
            <span>{department}</span>
            <span aria-hidden="true">·</span>
            <span>{location}</span>
            <span aria-hidden="true">·</span>
            <span>{type}</span>
          </div>
        </div>
        <StatusBadge status={active ? 'active' : 'inactive'} label={active ? 'Open' : 'Closed'} />
      </div>
      <p className="career-card__description">{description}</p>
      {active && (
        <Button variant="outline" size="sm" onClick={() => onApply?.(career)}>
          Apply Now
        </Button>
      )}
    </article>
  );
}
