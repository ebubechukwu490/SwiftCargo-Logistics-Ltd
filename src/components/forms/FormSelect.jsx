import { cn } from '@/utils/formatters';
import FormGroup from './FormGroup';

export default function FormSelect({
  label,
  id,
  name,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  hint,
  disabled = false,
  options = [],
  placeholder = 'Select an option',
  className,
  ...props
}) {
  const inputId = id || name;

  return (
    <FormGroup label={label} htmlFor={inputId} error={error} required={required} hint={hint}>
      <select
        id={inputId}
        name={name}
        value={value}
        onChange={(e) => onChange?.(name, e.target.value)}
        onBlur={() => onBlur?.(name)}
        disabled={disabled}
        required={required}
        aria-invalid={!!error}
        className={cn('form-select', className)}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value ?? opt} value={opt.value ?? opt}>
            {opt.label ?? opt}
          </option>
        ))}
      </select>
    </FormGroup>
  );
}
