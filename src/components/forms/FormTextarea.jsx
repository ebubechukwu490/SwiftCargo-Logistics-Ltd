import { cn } from '@/utils/formatters';
import FormGroup from './FormGroup';
import './FormTextarea.css';

export default function FormTextarea({
  label,
  id,
  name,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  hint,
  placeholder,
  disabled = false,
  rows = 4,
  className,
  ...props
}) {
  const inputId = id || name;

  return (
    <FormGroup label={label} htmlFor={inputId} error={error} required={required} hint={hint}>
      <textarea
        id={inputId}
        name={name}
        value={value}
        onChange={(e) => onChange?.(name, e.target.value)}
        onBlur={() => onBlur?.(name)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        rows={rows}
        aria-invalid={!!error}
        className={cn('form-textarea', className)}
        {...props}
      />
    </FormGroup>
  );
}
