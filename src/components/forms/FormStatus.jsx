import { cn } from '@/utils/formatters';
import './FormStatus.css';

export default function FormStatus({ type = 'success', message, className }) {
  if (!message) return null;

  return (
    <div className={cn('form-status', `form-status--${type}`, className)} role="alert">
      <span className="form-status__icon" aria-hidden="true">
        {type === 'success' && '✓'}
        {type === 'error' && '✕'}
        {type === 'loading' && '…'}
      </span>
      <p className="form-status__message">{message}</p>
    </div>
  );
}
