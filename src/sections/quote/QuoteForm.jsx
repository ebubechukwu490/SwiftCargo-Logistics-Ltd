import { useState } from 'react';
import { useFormValidation } from '@/hooks/useFormValidation';
import { isRequired, isValidNigerianPhone, VALIDATION_MESSAGES } from '@/utils/validators';
import { submitQuote } from '@/services/api';
import { CARGO_TYPES, SERVICE_AREAS } from '@/constants/services';
import FormInput from '@/components/forms/FormInput';
import FormSelect from '@/components/forms/FormSelect';
import FormTextarea from '@/components/forms/FormTextarea';
import Button from '@/components/buttons/Button';
import './QuoteForm.css';

const rules = {
  name: [(v) => (!isRequired(v) ? VALIDATION_MESSAGES.required : '')],
  phone: [
    (v) => (!isRequired(v) ? VALIDATION_MESSAGES.required : ''),
    (v) => (!isValidNigerianPhone(v) ? VALIDATION_MESSAGES.phone : ''),
  ],
  pickup: [(v) => (!isRequired(v) ? VALIDATION_MESSAGES.required : '')],
  delivery: [(v) => (!isRequired(v) ? VALIDATION_MESSAGES.required : '')],
  cargoType: [(v) => (!isRequired(v) ? VALIDATION_MESSAGES.required : '')],
  preferredDate: [(v) => (!isRequired(v) ? VALIDATION_MESSAGES.required : '')],
};

const initialValues = {
  name: '',
  phone: '',
  pickup: '',
  delivery: '',
  cargoType: '',
  preferredDate: '',
  notes: '',
};

export default function QuoteForm() {
  const { values, errors, handleChange, handleBlur, validateAll, resetForm } = useFormValidation(
    initialValues,
    rules
  );
  const [submission, setSubmission] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    setLoading(true);
    setError('');
    try {
      const result = await submitQuote(values);
      setSubmission(result);
      resetForm();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (submission) {
    return (
      <div className="quote-form__success" role="status">
        <div className="quote-form__success-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3>Quote Request Submitted</h3>
        <p>{submission.message}</p>
        <p className="quote-form__tracking">
          Reference: <strong>{submission.trackingId}</strong>
        </p>
        <Button variant="outline" onClick={() => setSubmission(null)}>Submit Another Request</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="quote-form" noValidate>
      <div className="quote-form__row">
        <FormInput
          label="Full Name / Business Name" name="name" required
          value={values.name} onChange={handleChange} onBlur={handleBlur} error={errors.name}
        />
        <FormInput
          label="Phone Number" name="phone" type="tel" required
          placeholder="0803 123 4567"
          value={values.phone} onChange={handleChange} onBlur={handleBlur} error={errors.phone}
        />
      </div>
      <div className="quote-form__row">
        <FormSelect
          label="Pickup Location" name="pickup" required
          options={SERVICE_AREAS}
          value={values.pickup} onChange={handleChange} onBlur={handleBlur} error={errors.pickup}
        />
        <FormSelect
          label="Delivery Location" name="delivery" required
          options={SERVICE_AREAS}
          value={values.delivery} onChange={handleChange} onBlur={handleBlur} error={errors.delivery}
        />
      </div>
      <div className="quote-form__row">
        <FormSelect
          label="Cargo Type" name="cargoType" required
          options={CARGO_TYPES}
          value={values.cargoType} onChange={handleChange} onBlur={handleBlur} error={errors.cargoType}
        />
        <FormInput
          label="Preferred Pickup Date" name="preferredDate" type="date" required
          value={values.preferredDate} onChange={handleChange} onBlur={handleBlur} error={errors.preferredDate}
        />
      </div>
      <FormTextarea
        label="Additional Notes" name="notes" rows={4} hint="Optional: cargo size, special handling, etc."
        value={values.notes} onChange={handleChange} onBlur={handleBlur}
      />
      {error && <p className="quote-form__error" role="alert">{error}</p>}
      <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
        Submit Quote Request
      </Button>
    </form>
  );
}
