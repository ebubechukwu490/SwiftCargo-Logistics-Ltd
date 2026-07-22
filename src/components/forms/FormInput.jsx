import { cn } from '@/utils/formatters';
import FormGroup from './FormGroup';
import './FormInput.css';

export default function FormInput({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  required = false,
  hint,
  placeholder,
  disabled = false,
  className,
  ...props
}) {
  const inputId = id || name;

  return (
    <FormGroup label={label} htmlFor={inputId} error={error} required={required} hint={hint}>
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange?.(name, e.target.value)}
        onBlur={() => onBlur?.(name)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={cn('form-input', className)}
        {...props}
      />
    </FormGroup>
  );
}
