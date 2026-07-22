import { cn } from '@/utils/formatters';
import './StatusBadge.css';

const STATUS_MAP = {
  pending: 'warning',
  confirmed: 'info',
  picked_up: 'info',
  in_transit: 'info',
  out_for_delivery: 'accent',
  delivered: 'success',
  cancelled: 'error',
  expired: 'error',
  active: 'success',
  inactive: 'neutral',
};

export default function StatusBadge({ status, label, className }) {
  const variant = STATUS_MAP[status] || 'neutral';

  return (
    <span className={cn('status-badge', `status-badge--${variant}`, className)}>
      {label || status?.replace(/_/g, ' ')}
    </span>
  );
}
