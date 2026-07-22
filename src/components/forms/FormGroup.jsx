import { cn } from '@/utils/formatters';
import './FormGroup.css';

export default function FormGroup({
  label,
  htmlFor,
  error,
  required = false,
  hint,
  children,
  className,
}) {
  return (
    <div className={cn('form-group', error && 'form-group--error', className)}>
      {label && (
        <label htmlFor={htmlFor} className="form-group__label">
          {label}
          {required && <span className="form-group__required" aria-hidden="true"> *</span>}
        </label>
      )}
      {children}
      {hint && !error && <span className="form-group__hint">{hint}</span>}
      {error && (
        <span className="form-group__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
